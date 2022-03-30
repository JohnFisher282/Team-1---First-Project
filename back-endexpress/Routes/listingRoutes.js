const router = require("express").Router();

const Listings = require("/testData/listingsDb");

router.get("/getAll", (req, res, next) => {
    Listings.find((err, listings) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.json(listings);
    })
});

router.get("/get", ({query}, res, next) => {
    Listings.find(query, (err, listings) => {
        if (err)
        return next({status: 400, message: err.message});
    else
        return res.json(listings);
    })
});

router.post("/create", ({body: listings}, res, next) => {

    new Listings(listings).save()
    .then(() => res.status(201).send("Created"))
    .catch(err => next ({status: 400, message: err.message}));
});
    

router.put("/update/:id", ({query: newListings, params: {id}}, res) => {

    Listings.findByIdAndUpdate(id, newListings, (err, replaced) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            Listings.findById(id, (err, updatedListings) => {
                if (err)
                    return next({status: 400, message: err.message});
                else
                    return res.status(202).send(updatedListings);
            });
    })
});

router.delete("/delete/:id", ({params: {id}}, res) => {
    
    Listings.findByIdAndDelete(id, (err) => {
        if (err)
            return next({status: 400, message: err.message});
        else
            return res.sendStatus(204);
    })
});

module.exports = router;