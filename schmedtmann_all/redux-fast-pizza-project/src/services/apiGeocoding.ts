
interface IProps {
  latitude: string;
  longitude: string;
}

export async function getAddress({ latitude, longitude }: IProps) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
