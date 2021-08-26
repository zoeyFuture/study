const arr1 = [
  { label: '项1', value: 1 },
  { label: '项2', value: 2 },
  {
    label: '项3',
    value: 3,
    children: [
      {
        label: '项3-1',
        value: 31,
      }
    ]

  },
]

console.log(arr1.flatMap((current, index, array) => {
  console.log('current:', current, index)
}))
