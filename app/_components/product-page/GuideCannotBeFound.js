import Button from "../ui/Button";

function GuideCannotBeFound() {
  return (
    <div className="width-size section-styles top-page-spacing flex flex-col items-center gap-60 ">
      <p>Unfortunately this travel guide couldn&apos;t be found :(</p>
      <Button href="/catalogue">See Available Travel Guides</Button>
    </div>
  );
}

export default GuideCannotBeFound;
