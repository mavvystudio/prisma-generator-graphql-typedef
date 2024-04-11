# prisma-generator-graphql-typedef

Transforms prisma schema into graphql schema

## Install
```bash
npm i prisma-generator-graphql-typedef
```

## Example
This prisma schema:
```javascript
model User {
  id        Int      @id @default(autoincrement())
  /// @gqlType Float
  createdAt DateTime @default(now())
  /// @gqlType Float
  updatedAt DateTime @updatedAt
  /// @gqlIgnore
  password  String 
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  /// user role
  role      Role     @default(USER)
}
```
Will generate this graphql schema: 

***password field is not included because of the @gqlIgnore keyword***

***createdAt and updatedAt fields' type was changed to Float by using @gqlType Float, which you can supply any type***

```bash
type User {
  id: Int
  createdAt: Float
  updatedAt: Float
  email: String
  name: String
  posts: [Post]
  profile: Profile
  role: Role
}
```

> This generator was bootstraped using [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)
