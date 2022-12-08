# Check-In-Demo-Day-Project-

This project is called Check-In and is utilized as a classroom tool for teachers to stop bullying and give students tools to succeed academically.

TECH USED:
Javascript,CSS, HTML, Node.js, Express.js(template handler), Passport.js, Open AI's Chat GPT API, Sentiment Analysis API ...



There are two different user experiences, one for the student and one for the teacher...


STUDENT EXPERIENCE:
Link to Check-In Application below

https://checkin.cyclic.app/



Student will login to the Check-In App or sign up if they do not have any user credentials already. Once logged in, student will be able to take 
enter important information for teacher review. This includes score on daily quiz (which student will have taken before Check-In), how the student feels from a scale of 1-10, and also write a few sentence to explain the mood score student provided. Once student enters this information, student will be able to view all this information and filter the text student writes in a 'Sentiment Analysis API' which will give a sentiment score, in addition to the mood score and grade on daily quiz provided by student. Sentiment scores that are positively correlated are positive numbers, and negative scores are negatively correlated. Magnitude of each score tells you the degree of positive or negative sentiment provided. Student can only see their own information, due to how information is segregated in the app. Students cannot see other student responses!




There is also a chat feature, where students can speak with an AI. This AI was designed by using Open AI's GPT API, which will respond to any student responses. This is great because the AI does not say anything negative to the student by design and is meant to positively affirm student emotion. Machine learning is something I am passionate about and adding this feature was paramount to my project.

![first](https://user-images.githubusercontent.com/113325142/206301373-6ea7857b-2886-4ea3-bc7b-7f03bfb2db0a.jpg)
![second](https://user-images.githubusercontent.com/113325142/206301384-52efc9f6-1fc6-45a0-94c9-d5ab170951e3.jpg)
![third](https://user-images.githubusercontent.com/113325142/206301479-53601a41-27ba-4f17-a555-9b91d6fdf92a.jpg)
![fourth](https://user-images.githubusercontent.com/113325142/206301493-1520ae0b-7aef-48d9-a8e3-88f35f82f635.jpg)


TEACHER EXPERIENCE:

The teacher will log-in to the app or sign up as teacher. There is a checkmark in sign-up to indicate user is a teacher. Once teacher logs in, they can only see the posts submitted by students.

*STUDENTS CANNOT VIEW OTHER STUDENT POST, ONLY TEACHER*

Teacher can see the mood score, grade on daily quiz, and also sentiment score derived from text input of student describing justification for mood score.
Teacher can review each score(s) and mark as checked if satisified, or recommend student for student-teacher meeting, which is meant to intervene and help student.

![fifth](https://user-images.githubusercontent.com/113325142/206302946-fb8f1785-73e1-4089-adb3-80d323815f79.jpg)


![sixth](https://user-images.githubusercontent.com/113325142/206303022-aa600bcc-d74c-4e75-8807-76ba83d5e64e.jpg)

To Run:
1.) Clone Repo
2.) Run npm install

To Use:
1.) Run npm start
2.) Navigate to localhost:8888


