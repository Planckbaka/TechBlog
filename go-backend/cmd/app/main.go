package main

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/handlers"
	"github.com/gin-gonic/gin"
)

func main() {
	// Create database
	db.InitDatabase()

	// create gin router
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	{
		v1 := r.Group("/v1")
		v1.GET("/users/get", handlers.GetUser)

		v1.GET("/users/get/:id", handlers.GetUserById)
		v1.POST("/users/create", handlers.CreateUserHandler)
		v1.PUT("users/update/:id", handlers.UpdateUserById)
		v1.DELETE("users/delete/:id", handlers.DeleteUserById)

	}

	{
		v2 := r.Group("/v2")
		v2.GET("/articles/get", handlers.GetArticle)
		v2.GET("/articles/get/:id", handlers.GetArticleById)
		v2.POST("/articles/create", handlers.CreateArticle)
		v2.DELETE("/articles/delete/:id", handlers.DeleteArticleById)

	}
	err := r.Run(":8080")
	if err != nil {
		return
	} // 默认监听 0.0.0.0:8080

}
