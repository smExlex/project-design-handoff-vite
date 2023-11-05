import styled from "styled-components";
import { LanguageButton } from "../Buttons/LanguageBtn";
import { useTranslation } from "react-i18next";

const TermsPolicyContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;

  .terms-policy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    gap: 20px;
    padding-top: 10px;
  }

  span {
    text-transform: uppercase;
  }

  img {
    max-width: 20px;
    margin: 20px 0 0 0;
  }
`;

export const TermsPolicy = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <TermsPolicyContainer>
      <div className="terms-policy">
        <p> {t("homePage.footer.terms")}</p>
        <p className="policy">{t("homePage.footer.policy")}</p>
      </div>
      <p>
        ©️2023 <span>Prima barre</span>, {t("homePage.footer.copyright")}
      </p>
      <LanguageButton />
    </TermsPolicyContainer>
  );
};
