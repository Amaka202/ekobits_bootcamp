const express = require("express");

const router = express.Router();

const items = [];
let id = 1;

router.get("/items", (req, res) => {
    return res.json(items);
})

router.post("/items", (req, res) => {
    items.push({
        item: req.params.item,
        price: req.params.price,
        id: ++id
    });
    return res.json({message: "item added!"})
})


router.get("/items/:id", (req, res) => {
    const item = items.find(val => val.id === Number(req.params.id));
    return res.json(item);
  })


router.patch("/items/:id", (req, res) => {
    const item = items.find(val => val.id === Number(req.params.id));
    itemArr.item = req.body.item;
    itemArr.price = req.body.price;
    return res.json({message: "Update succesfull"});
})

router.delete("/users/:id", (req, res) => {
    const itemIndex = items.findIndex(val => val.id === Number(req.params.id));
    items.splice(itemIndex, 1);
    return res.json({message: "item deleted!"})
})

module.exports = router;