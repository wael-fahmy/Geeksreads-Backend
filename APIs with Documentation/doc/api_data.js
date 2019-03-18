define({ "api": [
  {
    "type": "POST",
    "url": "/author_followings",
    "title": "Follow an author",
    "name": "Follow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Follow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"UserFollowed\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authorId",
            "optional": false,
            "field": "authorId",
            "description": "<p>GoodReads author ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Follow_an_author.js",
    "groupTitle": "Author"
  },
  {
    "type": "DELETE ",
    "url": "/author_followings",
    "title": "Unfollow an author",
    "name": "Unfollow_Author",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "unFollow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"Followed\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>GoodReads author ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Unfollow_an_author.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/api/author_url/<ID>",
    "title": "Find an author by name",
    "name": "findAuthorByName",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Author",
            "optional": false,
            "field": "Athr",
            "description": "<p>data for the required Author</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>author id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>author name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>author link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"Athr\": {\n\"id\": 589\n\"name\": \"Orson Scott Card\"\n\"link\": \"https://www.geeksreads.com/author/show/589.Orson_Scott_Card?utm_medium=api&utm_source=author_link\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Find_an_author_by_name.js",
    "groupTitle": "Author"
  },
  {
    "type": "GET",
    "url": "/author_following/",
    "title": "Show author following information",
    "name": "get_Author_Following_Information",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Follow",
            "description": "<p>There is a follow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"followpresent\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "FollowID",
            "description": "<p>Geeksreads following id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Show_author_following_information.js",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "/author/show.json",
    "title": "Get info about an author by id",
    "name": "get_author_info",
    "group": "Author",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Author could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "INFO",
            "description": "<p>info of User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"Name\":Michael,\n   \"Age\":30,\n   \"NumBooks Written\":344\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>GeeksdReads Author ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Get_info_about_an_author_by_id.js",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "/search/index.json",
    "title": "Find books by title, author, or ISBN",
    "version": "0.0.0",
    "name": "Find",
    "group": "Books",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Book title to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Author",
            "description": "<p>Book Author to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ISBN",
            "description": "<p>Book ISBN to Search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": true,
            "field": "Select",
            "defaultValue": "all",
            "description": "<p>Field to search,(default is 'all').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>Which page of results to show (default 1).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Book-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Book-count",
            "description": "<p>Number of results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ratings-count",
            "description": "<p>Number of ratings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "text-reviews-count",
            "description": "<p>Number of text reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "original-publication-year",
            "description": "<p>Publication year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "original-publication-month",
            "description": "<p>Publication month.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "original-publication-day",
            "description": "<p>Publication day.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "average-rating",
            "description": "<p>Average Rating.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"average-rating\": 4.30,\n  \"id\": 1,\n  \"Book-count\": 20,\n  \"ratings-count\": 20,\n  \"text-reviews-count\": 20,\n  \"original-publication-year\": 1985,\n  \"original-publication-month\": 5,\n  \"original-publication-day\": 25\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Book</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Find_books_by_title_author_or_ISBN.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/id_to_work_id",
    "title": "Get Geeksreads work IDs given Geeksreads book IDs",
    "name": "id_to_work_id",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "work_id",
            "description": "<p>Book Work ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>work_id</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_Goodreads_work_IDs_given_Goodreads_book_IDs.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/isbn_to_id",
    "title": "Get Geeksreads book IDs given ISBNs",
    "name": "isbn_to_id",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isbn",
            "description": "<p>Book ISBN.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>id</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_Goodreads_book_IDs_given_ISBNs.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/review_counts.json",
    "title": "Get review statistics given a list of ISBNs",
    "name": "review_counts",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "isbns",
            "description": "<p>Book ISBN.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param",
          "content": "{\n  isbns=0441172717,0141439602\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "review-count",
            "description": "<p>Statistics of Book Reviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Number of reviews\": 80\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotSpecified",
            "description": "<p>The <code>isbns</code> of the books was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>reviews</code> of the books was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_review_statistics_given_a_list_of_ISBNs.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/show",
    "title": "Get the reviews for a book given a Geeksreads book id",
    "name": "show",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Book ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "reviews-textOnly",
            "defaultValue": "false",
            "description": "<p>Limit reviews to text only,(default is false).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "User-id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "User-name",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text-reviews",
            "description": "<p>User review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"User-id\": 1,\n     \"User-name\": \"AvidReader\",\n     \"text-reviews\": \"A great book. Would recommend everyone to read.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>reviews</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_a_Goodreads_book_id.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/isbn",
    "title": "Get the reviews for a book given an ISBN",
    "name": "show_by_isbn",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isbn",
            "description": "<p>Book ISBN.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "User-id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "User-name",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text-reviews",
            "description": "<p>User review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"User-id\": 1,\n     \"User-name\": \"AvidReader\",\n     \"text-reviews\": \"A great book. Would recommend everyone to read.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>reviews</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_an_ISBN.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/book/title",
    "title": "Get the reviews for a book given a title string",
    "name": "title",
    "group": "Books",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title_string",
            "description": "<p>Book title.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "rating",
            "defaultValue": "0",
            "description": "<p>Limit reviews to a particular rating or above,(default is 0).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "User-id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "User-name",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "text-reviews",
            "description": "<p>User review.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"User-id\": 1,\n     \"User-name\": \"AvidReader\",\n     \"text-reviews\": \"A great book. Would recommend everyone to read.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BookNotFound",
            "description": "<p>The <code>reviews</code> of the Book was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_the_reviews_for_a_book_given_a_title_string.js",
    "groupTitle": "Books"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_ahmed_AMRAWY98_Desktop_Modified_Geeksreads_Backend_APIs_with_Documentation_doc_main_js",
    "groupTitle": "C__Users_ahmed_AMRAWY98_Desktop_Modified_Geeksreads_Backend_APIs_with_Documentation_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedCommentSuc",
            "description": "<p>comment was added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"AddedCommentSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "type": "POST",
    "url": "/comment.json",
    "title": "Create a comment",
    "name": "creatComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>The body of the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Subject Type Commented On; book,review,etc</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Id of resource given as type Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of user who wrote the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>Id of user who wrote the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date the comment was written on</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyComment",
            "description": "<p>Must Have At Least <code>1</code> Character In Comment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Comment.js",
    "groupTitle": "Comments"
  },
  {
    "type": "GET",
    "url": "/comment.json",
    "title": "List comments on a subject",
    "name": "listCommentsOnSubject",
    "group": "Comments",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>no comments on this subject</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote each comment</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"comment\":[\n        {\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n        },......\n]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Subject Type Commented On; book,review,etc</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Id of resource given as type Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Number of comments per page default is <code>20</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Comment.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/owned_books/",
    "title": "List books owned by a user",
    "name": "GetOwnedBooks",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Geeksware user_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Which page of results to show (default 1).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 0k",
          "content": "     HTTP/1.1 200 0k\n{\n     \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./List_books_owned_by_a_user.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "get",
    "url": "/owned_books/show/OWNED_BOOK_ID",
    "title": "Show an owned book",
    "name": "GetOwned_Books_Show",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_owner_id",
            "description": "<p>the current owner's user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "BookCrossing",
            "description": "<p>(bcid).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "OWNED_BOOK_ID",
            "description": "<p>a unique identifier for the owned book (not a book_id).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "BookName",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 0k",
          "content": "     HTTP/1.1 200 0k\n{ \n     \"BookName\":\"FRIENDS\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Show_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "post",
    "url": "/owned_books.json",
    "title": "Add to books owned",
    "name": "PostOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookid",
            "description": "<p>id of the book required</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": false,
            "field": "conditionCode",
            "description": "<p>one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionDescription",
            "description": "<p>description of book's condition</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "originalPurchaseDate",
            "description": "<p>when book was purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "originalPurchaseLocation",
            "description": "<p>where this book was purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uniqueCode",
            "description": "<p>BookCrossing id (BCID)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Add_to_books_owned.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "put",
    "url": "/owned_books/update",
    "title": "Update an owned book",
    "name": "PutOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ownedBookId",
            "description": "<p>id of the owned book record.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>Id of the book.</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": false,
            "field": "conditionCode",
            "description": "<p>one of 10 (brand new), 20 (like new), 30 (very good), 40 (good), 50 (acceptable), 60 (poor).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionDescription",
            "description": "<p>description of book's condition.</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "originalPurchaseDate",
            "description": "<p>When book was purchased.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originalPurchaseLocation",
            "description": "<p>Where this book was purchased.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uniqueCode",
            "description": "<p>BookCrossing id (BCID).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Update_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "post",
    "url": "/owned_books/destroy/ID",
    "title": "Delete an owned book",
    "name": "postOwned_books",
    "group": "Owned_Books",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Book could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ownedBookId",
            "description": "<p>ownedBookId is a unique identifier for the owned book (not a book_id).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Delete_an_owned_book.js",
    "groupTitle": "Owned_Books"
  },
  {
    "type": "delete",
    "url": "/rating",
    "title": "Unlike a resource",
    "group": "Resource",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ratingId",
            "description": "<p>Rating id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Unlike_a_resource.js",
    "groupTitle": "Resource",
    "name": "DeleteRating"
  },
  {
    "type": "post",
    "url": "/rating",
    "title": "Like a resource",
    "name": "PostRating",
    "group": "Resource",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Resource could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "credentials",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>Api secret from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>The Access Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessTokenSecret",
            "description": "<p>The Access Secret Token obtained from getAccessCredentials.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Resource rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resourceId",
            "description": "<p>Id of the resource being liked.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resourceType",
            "description": "<p>Camel case name of the resource type (e.g. UserStatus, Review).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Like_a_resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "POST",
    "url": "/geeksreads/:review",
    "title": "Create New review",
    "name": "addReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notresolved",
            "description": "<p>one of the parameters must have not resolved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedReviewSuc",
            "description": "<p>review was added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"AddedReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NUmber",
            "optional": false,
            "field": "book_id",
            "description": "<p>id of the book</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>body text of the review</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stars",
            "description": "<p>number of stars given to the book</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "readAt",
            "description": "<p>the date the book was read at</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shelf",
            "description": "<p>the shlef the book is placed in by the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "DELETE",
    "url": "/geeksreads/:review",
    "title": "Delete review",
    "name": "deletereview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>the review you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "deleteReviewSuc",
            "description": "<p>review was deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"deleteReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "review_Id",
            "description": "<p>Id of the review to be deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "PUT",
    "url": "/geeksreads/:review",
    "title": "edit review using id",
    "name": "editReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotResolved",
            "description": "<p>one of the parameters must have not resolved</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "editReviewSuc",
            "description": "<p>review was edited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"editReviewSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Review_Id",
            "description": "<p>review Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>Text of the review (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Stars",
            "description": "<p>Rating (0-5) (optional, default is 0 (No rating))</p>"
          },
          {
            "group": "Parameter",
            "type": "DatePicker",
            "optional": false,
            "field": "readAt",
            "description": "<p>Date (YYYY-MM-DD format, e.g. 2008-02-01)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shelf",
            "description": "<p>read|currently-reading|to-read|<USER SHELF NAME>(optional, must exist, see: shelves.list)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "GET",
    "url": "/geeksreads/:review",
    "title": "Get review by review id",
    "name": "getReview",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>review  you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote review,comment</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each review,comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"review\":{\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n         },\n\"comment\":[\n        {\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n        },......\n]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "review_Id",
            "description": "<p>Id of the review</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "comments_Per_Page",
            "description": "<p>number of comments review in one page default <code>20</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "GET",
    "url": "/geeksreads/:review",
    "title": "Get review by Book",
    "name": "getReviewByBook",
    "group": "Review",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>review  you are looking for does not exist</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>number of likes on review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body text of review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>name of the user who wrote review</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of the user who wrote review</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "date",
            "description": "<p>the date of each review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n\"review\":{\"likes\": 11,\n          \"body\": \"Hello World !\",\n          \"userName\": \"zzzdwsdsdsdsd zzzdwsdsdsdsd\",\n          \"userId\": \"567890987654567890\",\n          \"date\": \"2019-01-02T09:00:16.204Z\"\n         }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_Id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "book_id",
            "description": "<p>Id of the book</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "include_review_on_work",
            "description": "<p>View another review of the book if the review was not found default is <code>false</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./review.js",
    "groupTitle": "Review"
  },
  {
    "type": "post",
    "url": "/user_shelves",
    "title": "Add book shelf",
    "version": "0.0.0",
    "name": "ADDshelf",
    "group": "Shelves",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Shelf-Name",
            "description": "<p>Shelf Name to Add.</p>"
          },
          {
            "group": "Parameter",
            "type": "Select",
            "optional": false,
            "field": "Exclusive-Flag",
            "defaultValue": "false",
            "description": "<p>Set shelf as exclusive.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedShelfSuc",
            "description": "<p>Shelf added successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"AddedShelfSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-Shelf-Name",
            "description": "<p>The <code>Shelf-Name</code> is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-NotAdded:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"AddedShelfSuc\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Add_book_shelf.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "post",
    "url": "/shelf/add_to_shelf.json",
    "title": "Add a book to a shelf",
    "version": "0.0.0",
    "name": "ADDtoshelf",
    "group": "Shelves",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Shelf-Name",
            "description": "<p>Shelf Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Book-ID",
            "description": "<p>Book id to add to shelf.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedbookSuc",
            "description": "<p>Book added successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"AddedbookSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Book</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shelf-not-found",
            "description": "<p>The <code>Shelf</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-NotAdded:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"AddedbookSuc\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Add_a_book_to_a_shelf.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "post",
    "url": "/shelf/add_books_to_shelves.json",
    "title": "Add books to many shelves",
    "version": "0.0.0",
    "name": "ADDtoshelves",
    "group": "Shelves",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "Shelf-Names",
            "description": "<p>Shelf Names(List).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "Book-IDs",
            "description": "<p>Book ids to add to shelves(List).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "AddedbooksSuc",
            "description": "<p>Books added successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"AddedbooksSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Book-not-found",
            "description": "<p>The <code>Books</code> were not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shelf-not-found",
            "description": "<p>The <code>Shelves</code> were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ErrorBooksNotAdded:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"AddedbooksSuc\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Add_books_to_many_shelves.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "Put",
    "url": "/user_shelves/User_Shelves_ID",
    "title": "Edit book shelf",
    "version": "0.0.0",
    "name": "UpdateShelf",
    "group": "Shelves",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>shelf id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ShelfName",
            "description": "<p>Shelf New Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "UpdateShelfSuc",
            "description": "<p>if the update happens successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"UpdateShelfSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shelf-Not-Found",
            "description": "<p>The <code>ShelfID</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Edit_book_shelf.js",
    "groupTitle": "Shelves"
  },
  {
    "type": "Post",
    "url": "/user_status/destroy",
    "title": "Delete User Status",
    "version": "0.0.0",
    "name": "DeleteStatus",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Status id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "DeleteStatusSuc",
            "description": "<p>if the delete happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"DeleteSTatusSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>StatusID</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Delete_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/read_statuses/id",
    "title": "Get a user's read status",
    "name": "GetRead_Statuses",
    "group": "Status",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>Status could not be found</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Credentials",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Api key from app console.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Statusid",
            "description": "<p>Read status id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 0k",
          "content": "     HTTP/1.1 200 0k\n{ \n     \"status\": \"Read\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Get_a_user's_read_status.js",
    "groupTitle": "Status"
  },
  {
    "type": "Get",
    "url": "/user_status/show",
    "title": "Get User Status",
    "version": "0.0.0",
    "name": "GetUserStatuses",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserStatusID",
            "description": "<p>status id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "StatusID",
            "description": "<p>status id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Book",
            "description": "<p>the book name of this status</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "description": "<p>the page where the reader stopped reading</p>"
          },
          {
            "group": "Success 200",
            "type": "datePicker",
            "optional": false,
            "field": "Date",
            "description": "<p>the date when the status was written</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{\n\"StatusID\": 10\n\"Book\": \"The Magic\"\n\"Page\" :78\n\"Date\": \"2019-01-02T09:00:16.204\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Get_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "Get",
    "url": "/user_status.json",
    "title": "Update user status",
    "version": "0.0.0",
    "name": "UpdateUserStatuses",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserStatusID",
            "description": "<p>status id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Book",
            "description": "<p>the book name of this status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "description": "<p>the page where the reader stoped reading</p>"
          },
          {
            "group": "Parameter",
            "type": "datePicker",
            "optional": false,
            "field": "Date",
            "description": "<p>the date when the status was written</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "UpdateSuc",
            "description": "<p>if the update happend successfully or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{ \n \"UpdateSuc\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status-Not-Found",
            "description": "<p>The <code>Status</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./Update_User_Status.js",
    "groupTitle": "Status"
  },
  {
    "type": "POST",
    "url": "/user/userID/",
    "title": "Follow a user",
    "name": "Follow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>User could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Follow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"Followed\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>GoodReads User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Follow_a_user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/auth_user",
    "title": "Get id of user who authorized OAuth",
    "name": "GetUserID",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>User could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"ID\": 25468\n}",
          "type": "Number"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Get_id_of_user_who_authorized_OAuth.js",
    "groupTitle": "User"
  },
  {
    "type": "Get",
    "url": "/notifications",
    "title": "See the current user's notifications",
    "version": "0.0.0",
    "name": "GetUserNotification",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserID",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolen",
            "optional": false,
            "field": "Seen",
            "description": "<p>if the user saw it or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>the body of the notification</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "the",
            "description": "<p>date when the notification was sent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Expected Data on Success",
          "content": "{ \n\"Seen\": false\n\"Body\" : \"You have a friend request\"\n\"date\": \"2019-01-02T09:00:16.204\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The <code>User</code> was not found</p>"
          }
        ]
      }
    },
    "filename": "./See_the_current_user's_notifications.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/shelf/list",
    "title": "Get User's Shelves",
    "version": "0.0.0",
    "name": "GetUserShelves",
    "group": "User",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User-ID",
            "description": "<p>User ID to get his/her shelves.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>page to preview results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "UserShelves",
            "description": "<p>Shelves of the user(List).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserShelves\": [\"Science\",\"Biology\",\"Mathematics\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID-not-found",
            "description": "<p>The <code>User-ID</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_User's_Shelves.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/userID",
    "title": "Get User's Followers",
    "version": "0.0.0",
    "name": "GetUserfollowers",
    "group": "User",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User-ID",
            "description": "<p>User ID to get his/her Followers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>page to preview results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "UserIDs",
            "description": "<p>IDs of the Followers(List).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserIDs\": [2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID-not-found",
            "description": "<p>The <code>User-ID</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_User's_Followers.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/USER_ID/following.json",
    "title": "Get people a user is following",
    "version": "0.0.0",
    "name": "GetUserfollowings",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User-ID",
            "description": "<p>User ID to get his/her Followers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Page",
            "defaultValue": "1",
            "description": "<p>page to preview results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "UserIDs",
            "description": "<p>IDs of the people the User is Following(List).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"UserIDs\": [2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID-not-found",
            "description": "<p>The <code>User-ID</code> was not found.</p>"
          }
        ]
      }
    },
    "filename": "./Get_people_a_user_is_following.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/userID",
    "title": "Unfollow a user",
    "name": "Unfollow_user",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "NOTFOUND",
            "description": "<p>User could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id-not-found",
            "description": "<p>The<code>ID</code> was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "UNFollow",
            "description": "<p>Successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"unFollowed\": true\n}",
          "type": "Boolean"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>GoodReads User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./Unfollow_a_user.js",
    "groupTitle": "User"
  }
] });
