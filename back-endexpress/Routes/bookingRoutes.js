const router = require("express").Router();

const Bookings = require("../testData/bookingsDb");

// router.get("/getAll", (req, res, next) => {
//     Bookings.find((bookings, err) => {
//         if (err)
//             return next({status: 400, message: err.message});
//         else
//             return res.json(bookings);
//     })
// });

router.get("/getAll", (req,res,next) => {
    Bookings.find().then((results) => {
        return res.json(results);
    }).catch(err => next({status: 400, message: err.message}));
});

router.get("/get/:id", ({params: {id}}, res, next) => {
    Bookings.findById(id, (err, bookings) => {
        if (err)
        return next({status: 400, message: err.message});
    else
        return res.json(bookings);
    })
});

router.post("/create", ({body: bookings}, res, next) => {

    new Bookings(bookings).save()
    .then(() => res.status(201).send("Created Successfully"))
    .catch(err => next ({status: 400, message: err.message}));
});
    

router.put("/update/:id", ({body: {newBookings}, params: {id}}, res, next) => {

    Bookings.findByIdAndUpdate(id, newBookings, (err, replaced) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            Bookings.findById(id, (err, updatedBookings) => {
                if (err)
                    return next({status: 400, message: err.message});
                else
                    return res.status(202).send("Updated Successfully");
            });
    })
});

router.delete("/delete/:id", ({params: {id}}, res, next) => {
    
    Bookings.findByIdAndRemove(id, (err) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.status(204).send("Deleted");
    })
});

module.exports = router;