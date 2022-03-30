const router = require("express").Router();

const Bookings = require("/testData/bookingsDb");

router.get("/getAll", (req, res, next) => {
    Bookings.find((err, bookings) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.json(bookings);
    })
});

router.get("/get", ({query}, res, next) => {
    Bookings.find(query, (err, bookings) => {
        if (err)
        return next({status: 400, message: err.message});
    else
        return res.json(bookings);
    })
});

router.post("/create", ({body: bookings}, res, next) => {

    new Bookings(bookings).save()
    .then(() => res.status(201).send("Created"))
    .catch(err => next ({status: 400, message: err.message}));
});
    

router.put("/update/:id", ({query: newBookings, params: {id}}, res) => {

    Bookings.findByIdAndUpdate(id, newBookings, (err, replaced) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            Bookings.findById(id, (err, updatedBookings) => {
                if (err)
                    return next({status: 400, message: err.message});
                else
                    return res.status(202).send(updatedBookings);
            });
    })
});

router.delete("/delete/:id", ({params: {id}}, res) => {

    Bookings.findByIdAndDelete(id, (err) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.sendStatus(204);
    })
});

module.exports = router;