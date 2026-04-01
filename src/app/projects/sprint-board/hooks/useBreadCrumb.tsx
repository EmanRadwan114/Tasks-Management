import { usePathname } from "next/navigation";

const useBreadCrumb = () => {
  const pathname = usePathname();
  const paths = pathname
    .split("/")
    .slice(1)
    .map((path) => {
      const isActive = path === pathname.split("/").pop();
      return {
        name: path.split("-").join(" "),
        isActive,
      };
    });

  return paths;
};

export default useBreadCrumb;
