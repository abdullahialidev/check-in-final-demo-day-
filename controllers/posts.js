const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
var Sentiment = require("sentiment");
var sentiment = new Sentiment();

module.exports = {
  getMood: async (req, res) => {
    try {
      //Send pending and completed order(s) to the EJS..
      if (!req.user?.isTeacher) {
        res.render("mood.ejs", {
          studentName: req.user?.userName,
        });
      } else {
        // if it's a teacher do not show chat
      }
    } catch (err) {
      console.log(err);
    }
  },
  getChat: async (req, res) => {
    try {
      //Send pending and completed order(s) to the EJS..
      if (!req.user?.isTeacher) {
        res.render("chat.ejs", {
          studentName: req.user?.userName,
          response: "AI: Hey " + req.user?.userName,
        });
      } else {
        // if it's a teacher do not show chat
      }
    } catch (err) {
      console.log(err);
    }
  },
  getProfile: async (req, res) => {
    try {
      //Send pending and completed order(s) to the EJS..
      if (req.user?.isTeacher) {
        //Find any pending order(s)
        const pendingStudents = await Post.find({ reviewStatus: "pending" });
        //Find any completed order(s)
        const completedOrder = await Post.find({ reviewStatus: "complete" });

        // analyse
        let sentimentAnalysis = [];
        for (let i = 0; i < pendingStudents.length; i++) {
          sentimentAnalysis.push({
            analysis: sentiment.analyze(pendingStudents[i].message),
            student: pendingStudents[i],
          });
        }
        res.render("profile-teacher.ejs", {
          review: sentimentAnalysis,
          completedOrder: completedOrder,
        });
      } else {
        const allSubmissions = await Post.find({
          studentName: req.user?.userName,
        });
        res.render("profile-student.ejs", {
          submissions: allSubmissions,
          studentName: req.user?.userName,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  createPost: async (req, res) => {
    console.log(req.body);
    try {
      //Use post schema in models to create and save a document to Mongo DB Atlas
      await Post.create({
        mood: req.body.mood,
        grade: req.body.grade,
        studentName: req.body.studentName,
        entryDate: req.body.entryDate,
        message: req.body.message,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  // Finds ID that matches
  getReview: async (req, res) => {
    console.log(req.user);
    try {
      const post = await Post.findById(req.params.id);
      const analysis = sentiment.analyze(post.message);
      res.render("review.ejs", { post: post, analysis: analysis });
    } catch (err) {
      console.log(err);
    }
  },
  // Finds ID that matches
  completeReview: async (req, res) => {
    console.log(req.user);
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        ///Update order from pending to complete!
       
        {
          reviewStatus: "complete",
          message: req.user.userName,
        }
      );
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteReview: async (req, res) => {
    console.log(req.user);
    try {
      await Post.findOneAndDelete({ _id: req.params.id });
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  // Finds ID that matches
  sendChat: async (req, res) => {
    console.log(req.user);
    try {
      if (req.body.input) {
        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
          apiKey: "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", //process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        // const response = {
        //   data: {
        //     choices: [
        //       {
        //         text: "I am sorry to hear",
        //       },
        //     ],
        //   },
        // };
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt:
            "The following is a conversation with an AI assistant. The assistant is supportive, creative, clever, and very friendly.\n" +
            req.body.ai.trim() +
            "Human: " +
            req.body.input.trim() +
            "\nAI: ",
          temperature: 0.9,
          max_tokens: 150,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        });
        console.log(response.data.choices[0].text);
        const chat =
          req.body.ai.trim() +
          "\n" +
          req.user?.userName.trim() +
          ": " +
          req.body.input.trim() +
          "\nAI: " +
          response.data.choices[0].text.trim();
        res.render("chat.ejs", {
          response: chat,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
  // Deletes Order
  deleteOrder: async (req, res) => {
    try {
      await Post.remove({ _id: req.params.id });
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
