//Videos Data

export const videoData = [
  {
    id: 0,
    video: require("../videos/video1.mp4"),
    title: "Bad boy",
    description: "Come take the fun with the biker Gang",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
  {
    id: 1,
    video: require("../videos/video2.mp4"),
    title: "Cheetah beauty",
    description: "I'm pretty girl like u",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
  {
    id: 2,
    video: require("../videos/video3.mp4"),
    title: "Guru-M",
    description: "Méditation is a form of art",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
  {
    id: 3,
    video: require("../videos/video4.mp4"),
    title: "Family",
    description: "The family is all",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
  {
    id: 4,
    video: require("../videos/video5.mp4"),
    title: "Escalator",
    description: "Go tchek the sky Blue",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
  {
    id: 5,
    video: require("../videos/video6.mp4"),
    title: "ophive fitness",
    description: "fitness is very good for your mindset",
    likes: (Math.random() * 1000).toFixed(2).split(".").join(","),
    comment: Math.round(Math.random() * 100),
    isLike: false,
  },
];