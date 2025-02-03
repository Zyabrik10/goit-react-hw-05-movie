export default function loadElement(
  setLoad,
  setIsNothingFound,
  fetchFunc,
  id,
  setFunc,
  object
) {
  setLoad(true);
  fetchFunc(id)
    .then(({ data }) => {
      if (data[object]?.length === 0) setIsNothingFound(true);
      else setIsNothingFound(false);

      setFunc(data[object]);
      setLoad(false);
    })
    .catch(e => {
      console.log(e);
      setLoad(false);
      setIsNothingFound(true);
    });
}
