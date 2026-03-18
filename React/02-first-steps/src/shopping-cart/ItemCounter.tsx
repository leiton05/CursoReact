interface ItemProps {
  name: string;
  quantity: number;
}

export const ItemCounter = ({
  name: actualName,
  quantity: amount,
}: ItemProps) => {
  console.log(actualName);
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 150,
        }}
      >
        {actualName}
      </span>
      <button
        onClick={(event) => {
          console.log(`"Click en " + ${actualName}`);
        }}
      >
        -1
      </button>
      <span>{amount}</span>
      <button>+1</button>
    </section>
  );
};
