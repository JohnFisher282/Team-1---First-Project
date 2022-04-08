const router = require("express").Router();

const Listings = require("../testData/listingsDb");

router.get("/getAll", (req, res, next) => {
    Listings.find((err, listings) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.json(listings);
    })
});

router.get("/get/:id", ({params: {id}}, res, next) => {
    Listings.findById(id, (err, listings) => {
        if (err)
        return next({status: 400, message: err.message});
    else
        return res.json(listings);
    })
});

router.post("/create", ({body: listings}, res, next) => {

    new Listings(listings).save()
    .then(() => res.status(201).send("Created Successfully"))
    .catch(err => next ({status: 400, message: err.message}));
});
    

router.put("/update/:id", ({body: {newListings}, params: {id}}, res, next) => {

    Listings.findByIdAndUpdate(id, newListings, (err, replaced) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            Listings.findById(id, (err, updatedListings) => {
                if (err)
                    return next({status: 400, message: err.message});
                else
                    return res.status(202).send("Updated Successfully");
            });
    })
});

router.delete("/delete/:id", ({params: {id}}, res, next) => {
    
    Listings.findByIdAndRemove(id, (err) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.status(204).send("Deleted");
    })
});

module.exports = router;