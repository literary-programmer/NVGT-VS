import {TemplateTranslation} from "./symbolUtils";
import {SymbolScope} from "./symbolScope";
import {SymbolFunction, SymbolFunctionHolder, SymbolType} from "./symbolObject";

/**
 * The type of symbol that has been resolved by deduction.
 */
export class ResolvedType {
    constructor(
        public readonly symbolType: SymbolType | SymbolFunctionHolder, // TODO: rename?
        // public readonly sourceScope: SymbolScope | undefined,
        public readonly isHandler?: boolean,
        public readonly templateTranslate?: TemplateTranslation,
    ) {
    }

    public static create(args: {
        symbolType: SymbolType | SymbolFunctionHolder
        isHandler?: boolean
        templateTranslate?: TemplateTranslation
    }) {
        return new ResolvedType(args.symbolType, args.isHandler, args.templateTranslate);
    }

    public get sourceScope(): SymbolScope | undefined {
        // FIXME: Each overload is not necessarily in the same file?
        return this.symbolType.toList()[0].defScope;
    }

    public get identifierText(): string {
        return this.symbolType.toList()[0].defToken.text;
    }
}
