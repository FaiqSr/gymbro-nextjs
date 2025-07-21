type Props = {
  selected: boolean;
  onSelect: (val: boolean) => void;
};

const KalkulatorSwitcher = ({ selected, onSelect }: Props) => (
  <div className="flex flex-col lg:flex-row gap-6 justify-center items-center my-4 lg:mx-auto lg:w-[580px] xl:w-full">
    <button
      onClick={() => onSelect(true)}
      className={`w-full text-lg h-12 mt-4 bg-black/30 text-center rounded-3xl transition-all duration-200 hover:bg-abutua/90 hover:shadow-md focus:ring-2 ${
        selected ? "ring-2" : ""
      }`}
    >
      Kalkulator BMI
    </button>
    <button
      onClick={() => onSelect(false)}
      className={`w-full text-lg h-12 mt-4 bg-black/30 text-center rounded-3xl transition-all duration-200 hover:bg-abutua/90 hover:shadow-md focus:ring-2 ${
        !selected ? "ring-2" : ""
      }`}
    >
      Kalkulator IDAI
    </button>
  </div>
);

export default KalkulatorSwitcher;
