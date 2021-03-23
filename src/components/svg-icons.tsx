import Icon from "@ant-design/icons";
import React from "react";

import { ReactComponent as ImportedBankSVG } from '../assets/icons/svg/bank.svg';
import { ReactComponent as ImportedCheckMarkSVG } from '../assets/icons/svg/check-mark.svg';
import { ReactComponent as ImportedDocumentSVG } from '../assets/icons/svg/document.svg';
import { ReactComponent as ImportedLaptopSVG } from '../assets/icons/svg/laptop.svg';
import { ReactComponent as ImportedStoreSVG } from '../assets/icons/svg/store.svg';
import { ReactComponent as ImportedTaxSVG } from '../assets/icons/svg/tax.svg';
import { ReactComponent as FinalStepSVG } from '../assets/icons/svg/end-step.svg';
const SVGIcon: React.FC<{ svg: any, style: React.CSSProperties }> = ({ svg, style }) => {
    return <Icon style={style} component={svg} />
};

export const BankSVGIcon = SVGIcon({ svg: ImportedBankSVG, style: {} });
export const CheckMarkSVGIcon = SVGIcon({ svg: ImportedCheckMarkSVG, style: {} });
export const DocumentSVGIcon = SVGIcon({ svg: ImportedDocumentSVG, style: {} });
export const LaptopSVGIcon = SVGIcon({ svg: ImportedLaptopSVG, style: {} });
export const StoreSVGIcon = SVGIcon({ svg: ImportedStoreSVG, style: {} });
export const TaxSVGIcon = SVGIcon({ svg: ImportedTaxSVG, style: {} });
export const FinalStepSVGIcon = SVGIcon({ svg: FinalStepSVG, style: {}});