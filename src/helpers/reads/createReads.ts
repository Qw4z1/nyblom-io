const url = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_API_TOKEN as string;

export const createReads = async (slug: string, name: string) => {
  try {
    const res = await fetch(`${url}/reads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        slug: slug,
        name: name,
      }),
    });
  } catch (error) {
    console.error("createReads error: ", error);
  }
};
