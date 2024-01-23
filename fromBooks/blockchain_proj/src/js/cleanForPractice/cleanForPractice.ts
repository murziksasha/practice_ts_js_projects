

export default function cleanForPractice () {

  const testArr = ['youtube', 'google', 'tenet'];

  function toFixLink(arr: string[]): string[] {
    const resutl = arr.map((item) => {
      return `https://${item}.com`;
    });
    return resutl;
  }

  console.log(toFixLink(testArr));

}