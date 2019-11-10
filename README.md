# casaone_assessment

## Setup

  1. Clone this github repo.
  2. Install node and npm
  3. Change your current working directory to project folder (casaone)
  4. Run `npm install` to install dependencies
  5. Update database connection config present in app.js
  6. Run database script present in db.sql file
  7. Once database have been set up, run `npm start` to run local development server. Now the application should be listening on localhost at port 3000.



#### API Docs

1. Fetch ratings for a product

  |   |  |
  | ------------- | ------------- |
  | URL  | `<host>/ratings`   |
  | Method | GET   |
  | Description | Fetch user rating, meta data, average_rating and count for individual ratings |

  Query Parameters

  | **Param** | **Description** |
  | ------------- | ------------- |
  |	**page**  |  page number, default is 1   |
  | **size**  | size of each page, default is 10   |
  | **order_by** | order in which user rating is to be fetched, defaults to creation_date  |
  | **order_dir** | direction of the order, ASC or DESC, defaults to ASC   |

  Response Format

  ```
    {
    "status": 200,
    "error": null,
    "response": {
      "user_ratings": [
        {
          "user_name": "Ashish Agarwal",
          "rating_score": 5,
          "description": "Excellent product",
          "product_id": 1
        },
        {
          "user_name": "Ankit Jain",
          "rating_score": 5,
          "description": "Super Comfortable",
          "product_id": 1
        }
      ],
      "rating_meta": {
        "total_count": 3,
        "count": 2,
        "total_pages": 2,
        "prev_page": null,
        "current_page": 1,
        "next_page": 2
      },
      "average_rating": 4.67,
      "score_and_count": [
        {
          "rating_score": 4,
          "rating_count": 1
        },
        {
          "rating_score": 5,
          "rating_count": 2
        }
      ]
    }
  }
  ```
