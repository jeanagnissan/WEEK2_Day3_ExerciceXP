


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


// 1
for (const key in details) {
    console.log(`My ${details.my} ${details.is} ${details.the}`);
}