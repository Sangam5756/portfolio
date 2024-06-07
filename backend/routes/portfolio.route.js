import express from "express";
import models from "../models/portfolio.model.js";

const { Intro, About, Experience, Project, Contact } = models;

const router = express.Router();

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find({});
    const abouts = await About.find({});
    const experiences = await Experience.find({});
    const projects = await Project.find({});
    const contacts = await Contact.find({});

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      contact: contacts[0],
      experiences: experiences,
      projects: projects,
    });
  } catch (error) {
    res.send(500).send(error);
  }
});
// update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add Experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Experience
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Update about
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted SuccessFully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
