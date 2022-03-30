const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const { it, describe, beforeEach } = require ("mocha");

const server = require("../index");

const Bookings = require('../testData/bookingsDb');
const { expect } = require("chai");

describe ("Test Bookings", () => {
    let testBookings;

    beforeEach((done) => {
        Bookings.deleteMany((err) => {
        if (!err) {
            Bookings.create(
            [
                {
                title: "John",
                movieTitle: "Blade",
                seats: 2,
                ticketType: "Child",
                },
                {
                    title: "Euan",
                    movieTitle: "Wallace & Gromit: The Curse of the Were-Rabbit",
                    seats: 8,
                    ticketType: "Concession",
                    },
                    {
                        title: "Vaisala",
                        movieTitle: "Mr. Bean's Holiday",
                        seats: 2,
                        ticketType: "Adult",
                        },
            ], (error, created) => {
                if (!error) {
                    testBookings = created;
                }
                return done();
            });
        }
    });
});
    it ("Should create a new Booking", (done) => {
        chai.request(server).post("/bookings/create").send({
            name: "Kieran",
            movieTitle: "Shrek",
            seats: 3,
            ticketType: "Adult",
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res).to.haveOwnProperty("text", "Created Successfully");
            return done();
        });
    });
    it ("Should update an existing Booking", (done) => {
        chai.request(server).put(`/bookings/update/${testBookings.id}`).send({
            name: "Asad",
            movieTitle: "Batman",
            seats: 4,
            ticketType: "Adult",
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(202);
            expect(res).to.haveOwnProperty("text", "Updated Successfully");
            return done();
        });
    });
    it ("Shouldn't create a new Booking", (done) => {
        chai.request(server).post("/bookings/create").send().end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res).to.haveOwnProperty("text", "Bookings validation failed:...");
            return done();
        });
    });

    it ("Should find a Booking", (done) => {
        chai.request(server).get(`/bookings/get/${testBookings.id}`).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.haveOwnProperty('name', 'John');
            expect(res.body).to.haveOwnProperty('movieTitle', 'Blade');
            expect(res.body).to.haveOwnProperty('seats', 2);
            expect(res.body).to.haveOwnProperty('ticketType', 'Adult');
            //etc.
        });
    });

    it ("Should delete a Booking", (done) => {
        chai.request(server).delete("/bookings/delete").send((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(204);
            return done();
        });
    });

    it ("Should get all Bookings"), (done) => {
        chai.request(server).get("/bookings/getAll").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200)
            expect(res.body).should.be.a('array');
            expect(res.length).should.be.eql(3);
            done();
        });
    }
});