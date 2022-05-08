const router = require("express").Router();

let Feedback = require("../models/Feedback");



//add new feedback
router.route("/adds").post((req, res) => {
    const feedid = req.body.feedid;
    const cusname = req.body.cusname;

    const subject = req.body.subject;
    const comment = req.body.comment;
    const rating = Number(req.body.rating);


    const newFeedback = new Feedback({
        feedid,
        cusname,

        subject,
        comment,
        rating

    })
    newFeedback.save().then(() => {
        res.json("Feedback was Added")

    }).catch((err) => {
        console.log(err);
    })


})




//view feedbacks
router.route("/alls").get((req, res) => {
    Feedback.find().then((feedbacks) => {
        res.json(feedbacks)
    }).catch((err) => {
        console.log(err)
    })
})
//update feedback using feedbackid
router.route("/updates/:id").put(async (req, res) => {
    let fadId = req.params.id;
    const {
        feedid,
        cusname,

        subject,
        comment,
        rating

    } = req.body;

    const updateFeedback = {
        feedid,
        cusname,

        subject,
        comment,
        rating
    }

    const update = await Feedback.findByIdAndUpdate(fadId, updateFeedback).then(() => {
        res.status(200).send({ status: "Feedback ID updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })

})
//delete a feedback using id
router.route("/deletes/:id").delete(async (req, res) => {

    let fadId = req.params.id;

    await Feedback.findByIdAndDelete(fadId).then(() => {
        res.status(200).send({ status: "Feedback deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete feedback", error: err.message });
    })
})




//fetch data
router.route("/gets/:id").get(async (req, res) => {
    let fadId = req.params.id;
    await Feedback.findById(fadId).then((feedback) => {
        //res.status(200).send({status: "Item fetched", feedback})
        res.json(feedback);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get item", error: err.message });
    })
})

module.exports = router;