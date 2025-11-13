package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string `json:"name" binding:"required" gorm:"type:varchar(255);not null;unique"`
	Email    string `json:"email" binding:"required" gorm:"uniqueIndex"`
	Password string `json:"password" gorm:"type:varchar(255);not null"`
	Age      int    `json:"age" binding:"required" gorm:"not null;default:0"`
}
