import { render } from "@testing-library/react";
import { WalletModal } from "../WalletModal";
import { WalletProvider } from "../../../contexts/WalletContext";
describe("WalletModal", () => {
  it("renders without crashing", () => {
    render(
      <WalletProvider>
        <WalletModal isOpen={true} onClose={() => {}} />
      </WalletProvider>
    );
  });
});
