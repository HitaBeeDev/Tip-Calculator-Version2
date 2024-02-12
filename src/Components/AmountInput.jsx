export default function AmountInput({ bill, onSetBill }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="lg:text-sm text-xs font-medium text-[#1B1A55]">
        Bill
      </label>
      <input
        className="rounded-md p-1 h-8"
        type="text"
        placeholder="$"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
