type Barang = {
  SKU: string;
  nama: string;
  jenis: string;
  lokasi: string;
};

export async function cariBarang(sku: string): Promise<Barang | null> {
  const res = await fetch('/gudang.json');
  const data: Barang[] = await res.json();

  const hasil = data.find((item) =>
    item.SKU.toLowerCase() === sku.toLowerCase()
  );

  return hasil || null;
}
