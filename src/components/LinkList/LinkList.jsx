import LinkItem from "../LinkItem/LinkItem";
const LinkList = () => {
  const array = Array(5).fill("test");

  return (
    <ul>
      {array.map((link, id) => {
        return <LinkItem key={id} value={link} />;
      })}
    </ul>
  );
};

export default LinkList;
