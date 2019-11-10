var express = require('express');
var router = express.Router();

/* GET ratings listing. */

router.get('/', function(req, res, next) {

  var product_id = req.query["product_id"];
  var orderParam = req.query["order_by"] || 'creation_date' ;
  var orderDir = req.query["order_dir"] || 'ASC' ;
  var pageSize = parseInt(req.query["size"]) || 10;
  var pageNo = parseInt(req.query["page"]) || 1;

  var limit = pageSize;
  var offset = (pageNo - 1)* pageSize;

  var ratingsList = 'SELECT user_name,rating_score,description,product_id from ratings where product_id = ? AND is_published = ? ORDER BY ? ? LIMIT ? OFFSET ?';
  var score_and_count_SQL = 'SELECT rating_score, COUNT(rating_score) as rating_count from ratings where product_id = ? AND is_published = ? group by rating_score ';

  db.query(ratingsList+';'+score_and_count_SQL,[product_id, 1, orderParam, orderDir, limit, offset, product_id, 1], function (error, results, fields) {
    console.log();
    if (error) throw error;

    var user_ratings = results[0];
    var score_and_count = results[1];

    var total_rating = 0;
    var total_count = 0;

    for(var i=0;i<score_and_count.length;i++){
      total_count  = total_count + (score_and_count[i].rating_count);
      total_rating = total_rating + (score_and_count[i].rating_score * score_and_count[i].rating_count);
    }

    var average_rating = parseFloat( (total_rating / total_count).toFixed(2));

    var total_pages= Math.ceil(total_count/pageSize);

    var rating_meta = {
      total_count: total_count,
      count: user_ratings.length,
      total_pages: total_pages,
      prev_page: (pageNo==1 ? null : pageNo-1),
      current_page: pageNo,
      next_page: (pageNo==total_pages ? null : pageNo+1)
    }
    var response = {user_ratings: user_ratings, rating_meta: rating_meta, average_rating: average_rating, score_and_count: score_and_count  };

    res.send(JSON.stringify({"status": 200, "error": null, "response": response }));

  });


})

module.exports = router;
