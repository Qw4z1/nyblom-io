import { getMDXComponent } from "mdx-bundler/client";
import { ComponentProps, FC, useMemo } from "react";

type MDXComponents = ComponentProps<
  ReturnType<typeof getMDXComponent>
>["components"];

interface MdxContentProps {
  code: string;
  components?: MDXComponents;
}

const MdxContent: FC<MdxContentProps> = ({ code, components }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  // The component is memoized on the compiled MDX source, so it is stable
  // across renders, which is the pattern mdx-bundler recommends.
  // eslint-disable-next-line react-hooks/static-components
  return <Component components={components} />;
};

export default MdxContent;
