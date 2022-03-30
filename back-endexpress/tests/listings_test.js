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
          [
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
            {
              title: "Road to El Dorado",
              year: 2000,
              rated: "U",
              genre: ["Animation", "Adventure", "Comedy", "Family"],
              director: "Bibo Bergeron, Don Paul, Jeffrey Katzenberg",
              actors: ["Kevin Kline", "Kenneth Branagh", "Rosie Perez"],
              plot: "Two swindlers get their hands on a map to the fabled city of gold, El Dorado, while pulling off some sort of scam. Their plan goes bad and the rogues end up lost at sea after a number of misfortunes.",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTEzNWIwMzctOTE1YS00YjIyLTgwZGEtMTMxZDAzNzlmODMxXkEyXkFqcGdeQXVyMjgyMDk1MzY@._V1_FMjpg_UX1000_.jpg",
              rating: 7,
              showingTimes: ["12:00", "14:30", "17:30"],
            },
          ],
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
          "Listings validation failed:..."
        );
        return done();
      });
  });

  it("Should find a Listing", (done) => {
    chai
      .request(server)
      .get(`/listings/get/${testListings.id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("title", "Blade");
        expect(res.body).to.haveOwnProperty("director", "Stephen Norrington");
        expect(res.body).to.haveOwnProperty("certificate", 18);
        //etc.
      });
  });

  it("Should delete a Listing", (done) => {
    chai
      .request(server)
      .delete("/listings/delete")
      .send((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(204);
        return done();
      });
  });

  it("Should get all Listings"),
    (done) => {
      chai
        .request(server)
        .get("/listings/getAll")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).should.be.a("array");
          expect(res.length).should.be.eql(3);
          done();
        });
    };
});
