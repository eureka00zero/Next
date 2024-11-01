import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/moment'}>跳转到图片页</Link>
    </div>
  );
}
