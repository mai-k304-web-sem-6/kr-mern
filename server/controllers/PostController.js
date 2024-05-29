import PostModel from '../models/Post.js';

class PostController {
  async getAll (req, res) {
    try {
      const posts = await PostModel.find();
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить статьи',
      });
    }
  };

  async getOne (req, res) {
    try {
      const postId = req.params.id;
      const post = await PostModel.findById(postId);
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить статью',
      });
    }
  };

  async remove (req, res) {
    try {
      const postId = req.params.id;
      await PostModel.findOneAndDelete({ id: postId },
        res.json({
          success: true,
        })
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось удалить статью',
      });
    }
  };

  async create (req, res){
    try {
      const doc = new PostModel({
        title: req.body.title,
        text: req.body.text,
      });
      const post = await doc.save();
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось создать статью',
      });
    }
  };

  async update (req, res) {
    try {
      const postId = req.params.id;
      await PostModel.findOneAndUpdate({id: postId}, {
            title: req.body.title,
            text: req.body.text,
          },
          res.json({
            success: true,
          })
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось обновить статью',
      });
    }
  };
}

export default new PostController()
