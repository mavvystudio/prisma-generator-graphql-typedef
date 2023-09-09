# prisma-generator-graphql-typedef

Transforms prisma schema into graphql schema

## Install
```bash
npm i prisma-generator-graphql-typedef
```

## Example
This prisma schema:
```bash
model User {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  /// @gqlIgnore
  password String 
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  /// user role
  role      Role     @default(USER)
}
```
Will generate this graphql schema:
```bash
type User {
  id: Int
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  name: String
  posts: Post[]
  profile: Profile
  role: Role
}
```

> This generator was bootstraped using [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)
