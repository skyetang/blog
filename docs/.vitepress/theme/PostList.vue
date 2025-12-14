<script setup>
import { data as posts } from '../posts.data.js'

// 按年月分组
const groupedPosts = posts.reduce((groups, post) => {
  const dateParts = post.date.split('.')
  const year = dateParts[0] || 'Unknown'
  const month = dateParts[1] || '01'
  const key = `${year}.${month}`
  
  if (!groups[key]) {
    groups[key] = []
  }
  groups[key].push(post)
  return groups
}, {})

// 按日期排序
Object.keys(groupedPosts).forEach(key => {
  groupedPosts[key].sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<template>
  <div class="post-list">
    <div v-for="(posts, group) in groupedPosts" :key="group" class="post-group">
      <h2 class="group-title">{{ group }}</h2>
      <ul class="posts">
        <li v-for="post in posts" :key="post.url" class="post-item">
          <a :href="post.url" class="post-link">
            <span class="post-title">{{ post.title }}</span>
            <span class="post-date">{{ post.date }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  margin-top: 24px;
}

.group-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.posts {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.post-item {
  margin: 0;
  padding: 0;
}

.post-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
  text-decoration: none;
  transition: all 0.2s ease;
}

.post-link:hover {
  padding-left: 8px;
}

.post-link:hover .post-title {
  color: var(--vp-c-brand-1);
}

.post-title {
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s ease;
}

.post-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  margin-left: 16px;
}
</style>
