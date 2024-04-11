export default {
  "datamodel": "generator custom_generator {\n  provider = \"npx prisma-generator-graphql-typedef\"\n  output   = \"../types\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  /// @gqlType Float\n  createdAt DateTime @default(now())\n  /// @gqlType Float\n  updatedAt DateTime @updatedAt\n  /// @gqlIgnore\n  password String \n  email     String   @unique\n  name      String?\n  posts     Post[]\n  profile   Profile?\n  /// user role\n  role      Role     @default(USER)\n}\n\n/// User profile\nmodel Profile {\n  id     Int     @default(autoincrement()) @id\n  bio    String?\n  user   User    @relation(fields: [userId], references: [id])\n  userId Int     @unique\n}\n\nmodel Post {\n  id         Int        @id @default(autoincrement())\n  title      String     @default(\"\")\n  content    String?\n  published  Boolean    @default(false)\n  author     User?      @relation(fields: [authorId], references: [id])\n  authorId   Int?\n  categories Category[]\n}\n\nmodel Category {\n  id    Int    @id @default(autoincrement())\n  name  String\n  posts Post[]\n}\n\n/// user role\nenum Role {\n  ADMIN /// allowed to do everything\n  USER\n}\n\nenum NotificationType {\n  newPosts\n  newComments\n  newFollowers\n  reply\n  heartOnPost\n  heartOnComment\n  heartOnReply\n}\n\nenum Language {\n  Typescript\n  Javascript\n  Rust\n  Go\n  Python\n  Cpp\n}\n",
  "datasources": [
    {
      "name": "db",
      "provider": "postgresql",
      "activeProvider": "postgresql",
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      },
      "schemas": []
    }
  ],
  "generator": {
    "name": "custom_generator",
    "provider": {
      "fromEnvVar": null,
      "value": "npx prisma-generator-graphql-typedef"
    },
    "output": {
      "value": "/Users/marcjericespiritu/Code/Projects/prisma-generator-graphql-typedef/packages/usage/types",
      "fromEnvVar": null
    },
    "config": {},
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "dmmf": {
    "datamodel": {
      "enums": [
        {
          "name": "Role",
          "values": [
            {
              "name": "ADMIN",
              "dbName": null
            },
            {
              "name": "USER",
              "dbName": null
            }
          ],
          "dbName": null,
          "documentation": "user role"
        },
        {
          "name": "NotificationType",
          "values": [
            {
              "name": "newPosts",
              "dbName": null
            },
            {
              "name": "newComments",
              "dbName": null
            },
            {
              "name": "newFollowers",
              "dbName": null
            },
            {
              "name": "reply",
              "dbName": null
            },
            {
              "name": "heartOnPost",
              "dbName": null
            },
            {
              "name": "heartOnComment",
              "dbName": null
            },
            {
              "name": "heartOnReply",
              "dbName": null
            }
          ],
          "dbName": null
        },
        {
          "name": "Language",
          "values": [
            {
              "name": "Typescript",
              "dbName": null
            },
            {
              "name": "Javascript",
              "dbName": null
            },
            {
              "name": "Rust",
              "dbName": null
            },
            {
              "name": "Go",
              "dbName": null
            },
            {
              "name": "Python",
              "dbName": null
            },
            {
              "name": "Cpp",
              "dbName": null
            }
          ],
          "dbName": null
        }
      ],
      "models": [
        {
          "name": "User",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "createdAt",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "DateTime",
              "default": {
                "name": "now",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false,
              "documentation": "@gqlType Float"
            },
            {
              "name": "updatedAt",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "DateTime",
              "isGenerated": false,
              "isUpdatedAt": true,
              "documentation": "@gqlType Float"
            },
            {
              "name": "password",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false,
              "documentation": "@gqlIgnore"
            },
            {
              "name": "email",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": true,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "name",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "posts",
              "kind": "object",
              "isList": true,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "Post",
              "relationName": "PostToUser",
              "relationFromFields": [],
              "relationToFields": [],
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "profile",
              "kind": "object",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "Profile",
              "relationName": "ProfileToUser",
              "relationFromFields": [],
              "relationToFields": [],
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "role",
              "kind": "enum",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Role",
              "default": "USER",
              "isGenerated": false,
              "isUpdatedAt": false,
              "documentation": "user role"
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false
        },
        {
          "name": "Profile",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "bio",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "user",
              "kind": "object",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "User",
              "relationName": "ProfileToUser",
              "relationFromFields": [
                "userId"
              ],
              "relationToFields": [
                "id"
              ],
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "userId",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": true,
              "isId": false,
              "isReadOnly": true,
              "hasDefaultValue": false,
              "type": "Int",
              "isGenerated": false,
              "isUpdatedAt": false
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false,
          "documentation": "User profile"
        },
        {
          "name": "Post",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "title",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "String",
              "default": "",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "content",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "published",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Boolean",
              "default": false,
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "author",
              "kind": "object",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "User",
              "relationName": "PostToUser",
              "relationFromFields": [
                "authorId"
              ],
              "relationToFields": [
                "id"
              ],
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "authorId",
              "kind": "scalar",
              "isList": false,
              "isRequired": false,
              "isUnique": false,
              "isId": false,
              "isReadOnly": true,
              "hasDefaultValue": false,
              "type": "Int",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "categories",
              "kind": "object",
              "isList": true,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "Category",
              "relationName": "CategoryToPost",
              "relationFromFields": [],
              "relationToFields": [],
              "isGenerated": false,
              "isUpdatedAt": false
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false
        },
        {
          "name": "Category",
          "dbName": null,
          "fields": [
            {
              "name": "id",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": true,
              "isReadOnly": false,
              "hasDefaultValue": true,
              "type": "Int",
              "default": {
                "name": "autoincrement",
                "args": []
              },
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "name",
              "kind": "scalar",
              "isList": false,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "String",
              "isGenerated": false,
              "isUpdatedAt": false
            },
            {
              "name": "posts",
              "kind": "object",
              "isList": true,
              "isRequired": true,
              "isUnique": false,
              "isId": false,
              "isReadOnly": false,
              "hasDefaultValue": false,
              "type": "Post",
              "relationName": "CategoryToPost",
              "relationFromFields": [],
              "relationToFields": [],
              "isGenerated": false,
              "isUpdatedAt": false
            }
          ],
          "primaryKey": null,
          "uniqueFields": [],
          "uniqueIndexes": [],
          "isGenerated": false
        }
      ],
      "types": []
    },
    "schema": {
      "inputObjectTypes": {
        "prisma": [
          {
            "name": "UserWhereInput",
            "meta": {
              "source": "User"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "EnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostListRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "ProfileRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserOrderByWithRelationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostOrderByRelationAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileOrderByWithRelationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserWhereUniqueInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserOrderByWithAggregationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCountOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserAvgOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserMaxOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserMinOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserSumOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserScalarWhereWithAggregatesInput",
            "meta": {
              "source": "User"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTimeWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTimeWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "EnumRoleWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileWhereInput",
            "meta": {
              "source": "Profile"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "user",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileOrderByWithRelationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "user",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserOrderByWithRelationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileWhereUniqueInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileOrderByWithAggregationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCountOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileAvgOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileMaxOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileMinOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileSumOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileScalarWhereWithAggregatesInput",
            "meta": {
              "source": "Profile"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostWhereInput",
            "meta": {
              "source": "Post"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "BoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "IntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "UserRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryListRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostOrderByWithRelationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserOrderByWithRelationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryOrderByRelationAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostWhereUniqueInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostOrderByWithAggregationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCountOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostAvgOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostMaxOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostMinOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostSumOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostScalarWhereWithAggregatesInput",
            "meta": {
              "source": "Post"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "BoolWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "IntNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryWhereInput",
            "meta": {
              "source": "Category"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostListRelationFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryOrderByWithRelationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostOrderByRelationAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryWhereUniqueInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryOrderByWithAggregationInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 0
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCountOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryAvgOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryMaxOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryMinOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategorySumOrderByAggregateInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryScalarWhereWithAggregatesInput",
            "meta": {
              "source": "Category"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereWithAggregatesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateNestedManyWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateNestedOneWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUncheckedCreateNestedOneWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithoutAuthorNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpdateOneWithoutUserNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUncheckedUpdateOneWithoutUserNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateManyMutationInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedUpdateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "user",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateNestedOneWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "user",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateOneRequiredWithoutProfileNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCreateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUpdateManyMutationInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedUpdateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateNestedOneWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateNestedManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUncheckedCreateNestedManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateOneWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateManyWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableIntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUncheckedUpdateManyWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateManyMutationInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableIntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "name",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateNestedManyWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedCreateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedCreateNestedManyWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithoutCategoriesNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedUpdateInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedUpdateManyWithoutCategoriesNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCreateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateManyMutationInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedUpdateManyInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "IntFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "DateTimeFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "StringFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "mode",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "QueryMode",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "StringNullableFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "mode",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "QueryMode",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "EnumRoleFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostListRelationFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "every",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "some",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "none",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileRelationFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "is",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "isNot",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "ProfileWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostOrderByRelationAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCountOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserAvgOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserMaxOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserMinOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserSumOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "IntWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedFloatFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "DateTimeWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedDateTimeWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "StringWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "mode",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "QueryMode",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "StringNullableWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "mode",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "QueryMode",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "EnumRoleWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "NestedEnumRoleWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserRelationFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "is",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "isNot",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCountOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileAvgOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileMaxOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileMinOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileSumOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "userId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "BoolFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "IntNullableFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryListRelationFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "every",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "some",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "none",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryOrderByRelationAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCountOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostAvgOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostMaxOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostMinOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostSumOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "BoolWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedBoolWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "IntNullableWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedFloatNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCountOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryAvgOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryMaxOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryMinOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategorySumOrderByAggregateInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "SortOrder",
                    "namespace": "prisma",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateNestedManyWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "createMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateManyAuthorInputEnvelope",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCreateNestedOneWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateOrConnectWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedCreateNestedManyWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "createMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateManyAuthorInputEnvelope",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedCreateNestedOneWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateOrConnectWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "DateTimeFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "StringFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NullableStringFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "EnumRoleFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateManyWithoutAuthorNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "createMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateManyAuthorInputEnvelope",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUpdateOneWithoutUserNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateOrConnectWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpsertWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "IntFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "increment",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "decrement",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "multiply",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "divide",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "createMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateManyAuthorInputEnvelope",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedUpdateOneWithoutUserNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateOrConnectWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpsertWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateNestedOneWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateOrConnectWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateOneRequiredWithoutProfileNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateOrConnectWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpsertWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedUpdateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateNestedOneWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCreateNestedManyWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedCreateNestedManyWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "BoolFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateOneWithoutPostsNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpsertWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateManyWithoutPostsNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpsertWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpsertWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpdateWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateManyWithWhereWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpdateManyWithWhereWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "NullableIntFieldUpdateOperationsInput",
            "constraints": {
              "maxNumFields": 1,
              "minNumFields": 1
            },
            "fields": [
              {
                "name": "set",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "increment",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "decrement",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "multiply",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "divide",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedUpdateManyWithoutPostsNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryCreateOrConnectWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpsertWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpsertWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpdateWithWhereUniqueWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateManyWithWhereWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUpdateManyWithWhereWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateNestedManyWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedCreateNestedManyWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateManyWithoutCategoriesNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithWhereWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateManyWithWhereWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateManyWithoutCategoriesNestedInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "create",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connectOrCreate",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateOrConnectWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "upsert",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpsertWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "set",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "disconnect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "delete",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "connect",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateWithWhereUniqueWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "updateMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithWhereWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUpdateManyWithWhereWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "deleteMany",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedIntFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedDateTimeFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedStringFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedStringNullableFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedEnumRoleFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedIntWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedFloatFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedFloatFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedFloatFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedDateTimeWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedDateTimeWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedDateTimeFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedStringWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedStringNullableWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "contains",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "startsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "endsWith",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedStringNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedStringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedIntNullableFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedEnumRoleWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "NestedEnumRoleWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedEnumRoleFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedBoolFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedBoolWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedBoolWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedBoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedIntNullableWithAggregatesFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedIntNullableWithAggregatesFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_count",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_avg",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedFloatNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_sum",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_min",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "_max",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "NestedIntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "NestedFloatNullableFilter",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "equals",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "in",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "notIn",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": true
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "lte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "gte",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "not",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Float",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NestedFloatNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateNestedManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedCreateWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUncheckedCreateNestedManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateOrConnectWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateManyAuthorInputEnvelope",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateManyAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostCreateManyAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "skipDuplicates",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCreateWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedCreateWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileCreateOrConnectWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateManyWithWhereWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyMutationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostScalarWhereInput",
            "meta": {
              "source": "Post"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "StringNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "BoolFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "IntNullableFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUpsertWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedUpdateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "ProfileUncheckedCreateWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUpdateWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "ProfileUncheckedUpdateWithoutUserInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "bio",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateNestedManyWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedCreateWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateOrConnectWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpsertWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedUpdateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutProfileInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyWithoutAuthorNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedUpdateWithoutProfileInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "posts",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileCreateNestedOneWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedCreateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUncheckedCreateNestedOneWithoutUserInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserCreateOrConnectWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCreateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "name",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedCreateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryCreateOrConnectWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpsertWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "UserUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUpdateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUpdateOneWithoutUserNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "UserUncheckedUpdateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "createdAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "updatedAt",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "DateTime",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "DateTimeFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "password",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "email",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "role",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Role",
                    "namespace": "model",
                    "location": "enumTypes",
                    "isList": false
                  },
                  {
                    "type": "EnumRoleFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "profile",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "ProfileUncheckedUpdateOneWithoutUserNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpsertWithWhereUniqueWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedCreateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateWithWhereUniqueWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedUpdateWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateManyWithWhereWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateManyMutationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryUncheckedUpdateManyWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryScalarWhereInput",
            "meta": {
              "source": "Category"
            },
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "AND",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "OR",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "NOT",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "CategoryScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": true
                  }
                ]
              },
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "IntFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "StringFilter",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserCreateNestedOneWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedCreateWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateOrConnectWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpsertWithWhereUniqueWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "update",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "create",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedCreateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateWithWhereUniqueWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostWhereUniqueInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateWithoutCategoriesInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateManyWithWhereWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "where",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostScalarWhereInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "data",
                "isRequired": true,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "PostUpdateManyMutationInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "PostUncheckedUpdateManyWithoutPostsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostCreateManyAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUpdateManyWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateWithoutAuthorInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "categories",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "CategoryUncheckedUpdateManyWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateManyWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUpdateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedUpdateWithoutPostsInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "CategoryUncheckedUpdateManyWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "name",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUpdateWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "author",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "UserUpdateOneWithoutPostsNestedInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              }
            ]
          },
          {
            "name": "PostUncheckedUpdateWithoutCategoriesInput",
            "constraints": {
              "maxNumFields": null,
              "minNumFields": null
            },
            "fields": [
              {
                "name": "id",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "IntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "title",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "StringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "content",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "String",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableStringFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              },
              {
                "name": "published",
                "isRequired": false,
                "isNullable": false,
                "inputTypes": [
                  {
                    "type": "Boolean",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "BoolFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  }
                ]
              },
              {
                "name": "authorId",
                "isRequired": false,
                "isNullable": true,
                "inputTypes": [
                  {
                    "type": "Int",
                    "location": "scalar",
                    "isList": false
                  },
                  {
                    "type": "NullableIntFieldUpdateOperationsInput",
                    "namespace": "prisma",
                    "location": "inputObjectTypes",
                    "isList": false
                  },
                  {
                    "type": "Null",
                    "location": "scalar",
                    "isList": false
                  }
                ]
              }
            ]
          }
        ]
      },
      "outputObjectTypes": {
        "prisma": [
          {
            "name": "Query",
            "fields": [
              {
                "name": "findFirstUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstUserOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findManyUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "aggregateUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "UserOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AggregateUser",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "groupByUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "UserOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "by",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      },
                      {
                        "type": "UserScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "having",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserScalarWhereWithAggregatesInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "UserGroupByOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "findUniqueUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findUniqueUserOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstProfileOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findManyProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "aggregateProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AggregateProfile",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "groupByProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "by",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      },
                      {
                        "type": "ProfileScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "having",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileScalarWhereWithAggregatesInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "ProfileGroupByOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "findUniqueProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findUniqueProfileOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstPost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstPostOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findManyPost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "aggregatePost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AggregatePost",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "groupByPost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "by",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      },
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "having",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarWhereWithAggregatesInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "PostGroupByOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "findUniquePost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findUniquePostOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findFirstCategoryOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findManyCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "aggregateCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AggregateCategory",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "groupByCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithAggregationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "by",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "having",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarWhereWithAggregatesInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "CategoryGroupByOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "findUniqueCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "findUniqueCategoryOrThrow",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "Mutation",
            "fields": [
              {
                "name": "createOneUser",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "upsertOneUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "create",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "update",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createManyUser",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      }
                    ]
                  },
                  {
                    "name": "skipDuplicates",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Boolean",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteOneUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateOneUser",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateManyUser",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserUpdateManyMutationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "UserUncheckedUpdateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteManyUser",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "UserWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createOneProfile",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "upsertOneProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "create",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "update",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createManyProfile",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      }
                    ]
                  },
                  {
                    "name": "skipDuplicates",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Boolean",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteOneProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateOneProfile",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateManyProfile",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileUpdateManyMutationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "ProfileUncheckedUpdateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteManyProfile",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "ProfileWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createOnePost",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "upsertOnePost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "create",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "update",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createManyPost",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      }
                    ]
                  },
                  {
                    "name": "skipDuplicates",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Boolean",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteOnePost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateOnePost",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateManyPost",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostUpdateManyMutationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "PostUncheckedUpdateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteManyPost",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createOneCategory",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "upsertOneCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "create",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryUncheckedCreateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "update",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "createManyCategory",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryCreateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      }
                    ]
                  },
                  {
                    "name": "skipDuplicates",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Boolean",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteOneCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateOneCategory",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryUncheckedUpdateInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "updateManyCategory",
                "args": [
                  {
                    "name": "data",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryUpdateManyMutationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      },
                      {
                        "type": "CategoryUncheckedUpdateManyInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "deleteManyCategory",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "AffectedRowsOutput",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "executeRaw",
                "args": [
                  {
                    "name": "query",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "String",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "parameters",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Json",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Json",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "queryRaw",
                "args": [
                  {
                    "name": "query",
                    "isRequired": true,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "String",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "parameters",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Json",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  }
                ],
                "isNullable": false,
                "outputType": {
                  "type": "Json",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "AggregateUser",
            "fields": [
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserGroupByOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "createdAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "updatedAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "password",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "email",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "role",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Role",
                  "namespace": "model",
                  "location": "enumTypes",
                  "isList": false
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "UserMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "AggregateProfile",
            "fields": [
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileGroupByOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "bio",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "ProfileMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "AggregatePost",
            "fields": [
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostGroupByOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "title",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "content",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "published",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostSumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "PostMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "AggregateCategory",
            "fields": [
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategorySumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryGroupByOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryCountAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_avg",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryAvgAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_sum",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategorySumAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_min",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryMinAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_max",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "CategoryMaxAggregateOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "AffectedRowsOutput",
            "fields": [
              {
                "name": "count",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserCountOutputType",
            "fields": [
              {
                "name": "posts",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserCountAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "createdAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "updatedAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "password",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "email",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "role",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_all",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserAvgAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserSumAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserMinAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "createdAt",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "updatedAt",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "password",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "email",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "role",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Role",
                  "namespace": "model",
                  "location": "enumTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "UserMaxAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "createdAt",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "updatedAt",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "password",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "email",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "role",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Role",
                  "namespace": "model",
                  "location": "enumTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileCountAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "bio",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_all",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileAvgAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileSumAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileMinAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "bio",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "ProfileMaxAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "bio",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostCountOutputType",
            "fields": [
              {
                "name": "categories",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostCountAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "title",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "content",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "published",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_all",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostAvgAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostSumAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostMinAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "title",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "content",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "published",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "PostMaxAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "title",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "content",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "published",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryCountOutputType",
            "fields": [
              {
                "name": "posts",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryCountAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "_all",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryAvgAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategorySumAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryMinAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "CategoryMaxAggregateOutputType",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              }
            ]
          }
        ],
        "model": [
          {
            "name": "User",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "createdAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "updatedAt",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "password",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "email",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "role",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Role",
                  "namespace": "model",
                  "location": "enumTypes",
                  "isList": false
                }
              },
              {
                "name": "posts",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "profile",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Profile",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "UserCountOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "Profile",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "bio",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "userId",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "user",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "Post",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "title",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "content",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "published",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "authorId",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "author",
                "args": [],
                "isNullable": true,
                "outputType": {
                  "type": "User",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              },
              {
                "name": "categories",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "CategoryOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "CategoryScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Category",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "PostCountOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          },
          {
            "name": "Category",
            "fields": [
              {
                "name": "id",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "name",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              },
              {
                "name": "posts",
                "args": [
                  {
                    "name": "where",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "orderBy",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": true
                      },
                      {
                        "type": "PostOrderByWithRelationInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "cursor",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostWhereUniqueInput",
                        "namespace": "prisma",
                        "location": "inputObjectTypes",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "take",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "skip",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "Int",
                        "location": "scalar",
                        "isList": false
                      }
                    ]
                  },
                  {
                    "name": "distinct",
                    "isRequired": false,
                    "isNullable": false,
                    "inputTypes": [
                      {
                        "type": "PostScalarFieldEnum",
                        "namespace": "prisma",
                        "location": "enumTypes",
                        "isList": true
                      }
                    ]
                  }
                ],
                "isNullable": true,
                "outputType": {
                  "type": "Post",
                  "namespace": "model",
                  "location": "outputObjectTypes",
                  "isList": true
                }
              },
              {
                "name": "_count",
                "args": [],
                "isNullable": false,
                "outputType": {
                  "type": "CategoryCountOutputType",
                  "namespace": "prisma",
                  "location": "outputObjectTypes",
                  "isList": false
                }
              }
            ]
          }
        ]
      },
      "enumTypes": {
        "prisma": [
          {
            "name": "CategoryScalarFieldEnum",
            "values": [
              "id",
              "name"
            ]
          },
          {
            "name": "PostScalarFieldEnum",
            "values": [
              "id",
              "title",
              "content",
              "published",
              "authorId"
            ]
          },
          {
            "name": "ProfileScalarFieldEnum",
            "values": [
              "id",
              "bio",
              "userId"
            ]
          },
          {
            "name": "QueryMode",
            "values": [
              "default",
              "insensitive"
            ]
          },
          {
            "name": "SortOrder",
            "values": [
              "asc",
              "desc"
            ]
          },
          {
            "name": "TransactionIsolationLevel",
            "values": [
              "ReadUncommitted",
              "ReadCommitted",
              "RepeatableRead",
              "Serializable"
            ]
          },
          {
            "name": "UserScalarFieldEnum",
            "values": [
              "id",
              "createdAt",
              "updatedAt",
              "password",
              "email",
              "name",
              "role"
            ]
          }
        ],
        "model": [
          {
            "name": "Role",
            "values": [
              "ADMIN",
              "USER"
            ]
          }
        ]
      },
      "fieldRefTypes": {}
    },
    "mappings": {
      "modelOperations": [
        {
          "model": "User",
          "aggregate": "aggregateUser",
          "createMany": "createManyUser",
          "createOne": "createOneUser",
          "deleteMany": "deleteManyUser",
          "deleteOne": "deleteOneUser",
          "findFirst": "findFirstUser",
          "findFirstOrThrow": "findFirstUserOrThrow",
          "findMany": "findManyUser",
          "findUnique": "findUniqueUser",
          "findUniqueOrThrow": "findUniqueUserOrThrow",
          "groupBy": "groupByUser",
          "updateMany": "updateManyUser",
          "updateOne": "updateOneUser",
          "upsertOne": "upsertOneUser"
        },
        {
          "model": "Profile",
          "aggregate": "aggregateProfile",
          "createMany": "createManyProfile",
          "createOne": "createOneProfile",
          "deleteMany": "deleteManyProfile",
          "deleteOne": "deleteOneProfile",
          "findFirst": "findFirstProfile",
          "findFirstOrThrow": "findFirstProfileOrThrow",
          "findMany": "findManyProfile",
          "findUnique": "findUniqueProfile",
          "findUniqueOrThrow": "findUniqueProfileOrThrow",
          "groupBy": "groupByProfile",
          "updateMany": "updateManyProfile",
          "updateOne": "updateOneProfile",
          "upsertOne": "upsertOneProfile"
        },
        {
          "model": "Post",
          "aggregate": "aggregatePost",
          "createMany": "createManyPost",
          "createOne": "createOnePost",
          "deleteMany": "deleteManyPost",
          "deleteOne": "deleteOnePost",
          "findFirst": "findFirstPost",
          "findFirstOrThrow": "findFirstPostOrThrow",
          "findMany": "findManyPost",
          "findUnique": "findUniquePost",
          "findUniqueOrThrow": "findUniquePostOrThrow",
          "groupBy": "groupByPost",
          "updateMany": "updateManyPost",
          "updateOne": "updateOnePost",
          "upsertOne": "upsertOnePost"
        },
        {
          "model": "Category",
          "aggregate": "aggregateCategory",
          "createMany": "createManyCategory",
          "createOne": "createOneCategory",
          "deleteMany": "deleteManyCategory",
          "deleteOne": "deleteOneCategory",
          "findFirst": "findFirstCategory",
          "findFirstOrThrow": "findFirstCategoryOrThrow",
          "findMany": "findManyCategory",
          "findUnique": "findUniqueCategory",
          "findUniqueOrThrow": "findUniqueCategoryOrThrow",
          "groupBy": "groupByCategory",
          "updateMany": "updateManyCategory",
          "updateOne": "updateOneCategory",
          "upsertOne": "upsertOneCategory"
        }
      ],
      "otherOperations": {
        "read": [],
        "write": [
          "executeRaw",
          "queryRaw"
        ]
      }
    }
  },
  "otherGenerators": [],
  "schemaPath": "/Users/marcjericespiritu/Code/Projects/prisma-generator-graphql-typedef/packages/usage/prisma/schema.prisma",
  "version": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  "dataProxy": false,
  "postinstall": false
}