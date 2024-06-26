export default `type User {
  id: Int!
  createdAt: Float!
  updatedAt: Float!
  email: String!
  name: String
  posts: [Post]!
  profile: Profile
  role: Role!
}

type Profile {
  id: Int!
  bio: String
  user: User!
  userId: Int!
}

type Post {
  id: Int!
  title: String!
  content: String
  published: Boolean!
  author: User
  authorId: Int
  categories: [Category!]!
}

type Category {
  id: Int!
  name: String!
  posts: [Post]!
}


enum Role {
  ADMIN
  USER
}

enum NotificationType {
  newPosts
  newComments
  newFollowers
  reply
  heartOnPost
  heartOnComment
  heartOnReply
}

enum Language {
  Typescript
  Javascript
  Rust
  Go
  Python
  Cpp
}
`