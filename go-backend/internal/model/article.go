package model

import (
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	Title    string    `json:"title" gorm:"type:varchar(255);not null"`
	Author   string    `json:"author" gorm:"type:varchar(255);not null"`
	ReadTime string    `json:"read_time" gorm:"type:varchar(255);not null"`
	Summary  string    `json:"summary" gorm:"type:text"`
	Section  []Section `json:"section" gorm:"foreignKey:ArticleID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Content  string    `json:"content" gorm:"type:text"`
}
type Section struct {
	// Section 内的 id（如 "intro"）是业务 ID，不是自增主键的话可以：
	ID        uint   `gorm:"primaryKey;autoIncrement"`
	Key       string `gorm:"type:varchar(100);not null"` // 存 "intro" / "container" 等
	Title     string `gorm:"type:varchar(255)"`
	Order     int    `gorm:"default:0"` // 若需要顺序
	ArticleID uint   `gorm:"index;not null"`
}
