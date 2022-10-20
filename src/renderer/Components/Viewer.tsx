interface ViewerProp {
  pdf: string;
}

const Viewer = (prop: ViewerProp) => {
  return (
    <span>
      <object data={prop.pdf} type="application/pdf" width="50%" height="640px">
        <a href={prop.pdf} />
      </object>
    </span>
  );
};

export default Viewer;
