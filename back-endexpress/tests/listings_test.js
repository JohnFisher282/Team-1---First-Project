const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require("mocha");

const server = require("../index");

const Listings = require("../testData/listingsDb");
const { expect } = require("chai");

describe("Test Listings", () => {
  let testListings;

  beforeEach((done) => {
    Listings.deleteMany((err) => {
      if (!err) {
        Listings.create(
            {
              title: "Arrival",
              year: 2016,
              rated: "PG-13",
              genre: ["Sci-fi", "Thriller"],
              director: "Denis Villeneuve",
              actors: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
              plot: "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
              rating: 8,
              showingTimes: ["15:00", "19:30", "20:00"],
            },
          (error, created) => {
            if (!error) {
              testListings = created;
            }
            return done();
          }
        );
      }
    });
  });
  it("Should create a new Listing", (done) => {
    chai
      .request(server)
      .post("/listings/create")
      .send({
        title: "The Lion King",
        year: 1994,
        rated: "U",
        genre: ["Family", "Musical"],
        director: "Rob Minkoff",
        actors: ["James Earl Jones", "Jeremy Irons", "Matthew Broderick"],
        plot: "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
        rating: 8.5,
        showingTimes: ["15:00", "19:30", "20:00"],
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res).to.haveOwnProperty("text", "Created Successfully");
        return done();
      });
  });
  it("Should update an existing Listing", (done) => {
    chai
      .request(server)
      .put(`/listings/update/${testListings.id}`)
      .set('content-type', 'application/json')
      .send({
        title: "The Lion King",
        year: 1994,
        rated: "U",
        genre: ["Family", "Musical"],
        director: "Rob Minkoff",
        actors: ["James Earl Jones", "Jeremy Irons", "Matthew Broderick"],
        plot: "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
        rating: 8.5,
        showingTimes: ["15:00", "19:30", "20:00"],
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(202);
        expect(res).to.haveOwnProperty("text", "Updated Successfully");
        return done();
      });
  });
  it("Shouldn't create a new Listing", (done) => {
    chai
      .request(server)
      .post("/listings/create")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.haveOwnProperty(
          "text",
          "Listings validation failed: rating: Path `rating` is required., poster: Path `poster` is required., plot: Path `plot` is required., director: Path `director` is required., rated: Path `rated` is required., year: Path `year` is required., title: Path `title` is required."
        );
        return done();
      });
  });

  it("Should delete a Listing", (done) => {
      chai
        .request(server)
        .delete(`/listings/delete/${testListings.id}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(204);
          return done();
        })
    });

  it("Should find a Listing", (done) => {
    chai
      .request(server)
      .get(`/listings/get/${testListings.id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("title", "Arrival");
        expect(res.body).to.haveOwnProperty("year", 2016);
        expect(res.body.genre).to.eql(["Sci-fi", "Thriller"]);
        expect(res.body).to.haveOwnProperty("director", "Denis Villeneuve");
        expect(res.body.actors).to.eql(["Amy Adams", "Jeremy Renner", "Forest Whitaker"]);
        expect(res.body).to.haveOwnProperty("plot", "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.");
        expect(res.body).to.haveOwnProperty("poster",
          "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg");
        expect(res.body).to.haveOwnProperty("rating", 8);
        expect(res.body.showingTimes).to.eql(["15:00", "19:30", "20:00"]);
        return done();
      });
  });

  

  it("Should get all Listings", (done) => {
      chai
        .request(server)
        .get("/listings/getAll")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body.length).to.equal(1);
          return done();
        });
    });
});
