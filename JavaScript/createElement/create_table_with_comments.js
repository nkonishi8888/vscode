// テーブルを表示するための親要素を取得
const container = document.getElementById('tableContainer');

// テーブル要素を作成
const table = document.createElement('table');
table.border = '1'; // 枠線を表示

// ヘッダー行を作成
const headerRow = document.createElement('tr');
const headers = ['名前', '年齢', '職業']; // ヘッダーの項目
headers.forEach(text => {
  const th = document.createElement('th'); // ヘッダーセルを作成
  th.textContent = text; // テキストを設定
  headerRow.appendChild(th); // 行に追加
});
table.appendChild(headerRow); // テーブルにヘッダー行を追加

// 表示するデータの配列
const data = [
  { name: '小西', age: 30, job: 'エンジニア' },
  { name: '佐藤', age: 28, job: 'デザイナー' }
];

// データ行を作成
data.forEach(person => {
  const row = document.createElement('tr'); // 行を作成
  Object.values(person).forEach(value => {
    const td = document.createElement('td'); // データセルを作成
    td.textContent = value; // テキストを設定
    row.appendChild(td); // 行に追加
  });
  table.appendChild(row); // テーブルに行を追加
});

// 最後にテーブルを画面に追加
container.appendChild(table);
