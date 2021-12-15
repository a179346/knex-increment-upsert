<h1 align="center">knex-increment-upsert 👋</h1>
<p>
  <a href="https://github.com/a179346/knex-increment-upsert/actions/workflows/build.yml" target="_blank">
    <img alt="Documentation" src="https://github.com/a179346/knex-increment-upsert/actions/workflows/build.yml/badge.svg" />
  </a>
  <a href="https://www.npmjs.com/package/knex-increment-upsert" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/npm/v/knex-increment-upsert?maxAge=3600)" />
  </a>
  <a href="https://github.com/a179346/knex-increment-upsert#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/a179346/knex-increment-upsert/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/a179346/knex-increment-upsert/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/a179346/knex-increment-upsert" />
  </a>
</p>

> knex insert and on duplicate key update & increment

## 🔗 Link
+ [Github](https://github.com/a179346/knex-increment-upsert#readme)
+ [npm](https://www.npmjs.com/package/knex-increment-upsert)

## 📥 Install

```sh
npm install knex-increment-upsert
```
## 🧩 Requirements
- knex >= `v0.95.0`

## 📖 Usage
> ### `incrementUpsert(db, tableName, data, incrementColumns?, updateColumns?)` => `Promise<number[]>`
- #### Single upsert
```js
const { incrementUpsert } = require('knex-increment-upsert');
const knex = require('knex');

const db = knex({ ... });

// Outputs:
// insert into `table1` (`inc1`, `pk1`, `pk2`) values (3, 'pk1', 'pk2') on duplicate key update `inc1` = `inc1` + values(`inc1`)
incrementUpsert(
  db, 
  'table1', 
  {
    pk1: 'pk1',
    pk2: 'pk2',
    inc1: 3,
  }, 
  [ 'inc1' ]
);
```

- #### Batch upsert
```js
// Outputs:
// insert into `table1` (`col1`, `inc1`, `pk1`, `pk2`) values ('1', 1, '1', '1'), ('2', 2, '2', '2') on duplicate key update `inc1` = `inc1` + values(`inc1`),`col1` = values(`col1`)
incrementUpsert(
  db,
  'table1',
  [
    {
      pk1: '1',
      pk2: '1',
      inc1: 1,
      col1: '1'
    },
    {
      pk1: '2',
      pk2: '2',
      inc1: 2,
      col1: '2'
    }
  ],
  [ 'inc1' ],
  [ 'col1' ]
);
```

## 🙋‍♂️ Author


* Github: [@a179346](https://github.com/a179346)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/a179346/knex-increment-upsert/issues).

## 🌟 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [a179346](https://github.com/a179346).<br />
This project is [MIT](https://github.com/a179346/knex-increment-upsert/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_