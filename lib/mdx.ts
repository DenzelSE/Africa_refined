import { serialize } from "next-mdx-remote/serialize"

export async function serializeMDX(content: string) {
  const mdxSource = await serialize(content, {
    // Optional: Add MDX plugins here if needed
    mdxOptions: {
      development: process.env.NODE_ENV === "development",
    },
  })

  return mdxSource
}
