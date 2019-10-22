/** this is where data for table population goes */

exports.tableData = [
  {
    individualCatch: {
      primary: {
        exists: true,
        key: 'id',
      },
      foreign: [
        {
          table: 'FILL_ME',
          pk_id: 'FILL_ME',
        }
      ],
      columnOptions: ['FILL_ME'],
      constraintOptions: ['FILL_ME'],
    }
  },
];
