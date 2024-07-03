import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) =>
{
  const query = req.query;

  try
  {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) =>
{
  const id = req.params.id;
  try
  {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies?.token;

    if (token)
    {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) =>
      {
        if (!err)
        {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    }
    res.status(200).json({ ...post, isSaved: false });
  } catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) =>
{
  const body = req.body;
  const tokenUserId = req.userId;

  try
  {
    // Check if the SavedPost already exists
    const existingSavedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId: body.postData.id, // Assuming postData.id is the postId
        },
      },
    });

    if (existingSavedPost)
    {
      // Handle case where SavedPost already exists
      return res.status(400).json({ message: "SavedPost already exists" });
    }

    // Create a new SavedPost
    const newSavedPost = await prisma.savedPost.create({
      data: {
        userId: tokenUserId,
        postId: body.postData.id, // Assuming postData.id is the postId
      },
    });

    res.status(200).json(newSavedPost);
  } catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Failed to create SavedPost" });
  }
};


export const updatePost = async (req, res) =>
{
  try
  {
    res.status(200).json();
  } catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Failed to update posts" });
  }
};

export const deletePost = async (req, res) =>
{
  const id = req.params.id;
  const tokenUserId = req.userId;

  try
  {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId)
    {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted" });
  } catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};