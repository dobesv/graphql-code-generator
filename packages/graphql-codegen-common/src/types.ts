export const EInputType = {
  SINGLE_FILE: 'SINGLE_FILE',
  MULTIPLE_FILES: 'MULTIPLE_FILES',
  PROJECT: 'PROJECT',
};

export interface CodegenOutput {
  content: string;
  filename: string;
}

export interface GeneratorConfig {
  [configName: string]: any;
}

export interface GqlGenConfig {
  generatorConfig?: GeneratorConfig;
  out?: string;
}

export type OutputProcessorFn =
  (generatorConfig: GqlGenConfig, codegenSettings: Settings, document: Document, schemaTemplateContext: SchemaTemplateContext) => CodegenOutput[];

export interface AstNode {
  directives: DirectiveUseMap;
  usesDirectives: boolean;
}

export interface Argument extends AstNode {
  name: string;
  description: string;
  type: string;
  isRequired: boolean;
  isArray: boolean;
  isType: boolean;
  isScalar: boolean;
  isInterface: boolean;
  isUnion: boolean;
  isInputType: boolean;
  isEnum: boolean;
}

export interface Field extends AstNode {
  name: string;
  description: string;
  arguments: Argument[];
  type: string;
  isArray: boolean;
  isRequired: boolean;
  hasArguments: boolean;
  isType: boolean;
  isScalar: boolean;
  isInterface: boolean;
  isUnion: boolean;
  isInputType: boolean;
  isEnum: boolean;
}

export interface Type extends AstNode {
  fields: Field[];
  description: string;
  name: string;
  isInputType: boolean;
  interfaces: string[];
  hasFields: boolean;
  hasInterfaces: boolean;
}

export interface Scalar extends AstNode {
  name: string;
  description: string;
}

export interface Enum extends AstNode {
  name: string;
  description: string;
  values: EnumValue[];
}

export interface EnumValue extends AstNode {
  name: string;
  value: string;
  description: string;
}

export interface Union extends AstNode {
  name: string;
  description: string;
  possibleTypes: string[];
}

export interface Interface extends AstNode {
  name: string;
  description: string;
  fields: Field[];
  hasFields: boolean;
}

export interface SchemaTemplateContext extends AstNode {
  types: Type[];
  inputTypes: Type[];
  enums: Enum[];
  unions: Union[];
  interfaces: Interface[];
  scalars: Scalar[];
  definedDirectives: Directive[];
  hasTypes: boolean;
  hasInputTypes: boolean;
  hasEnums: boolean;
  hasUnions: boolean;
  hasScalars: boolean;
  hasInterfaces: boolean;
  hasDefinedDirectives: boolean;
  rawSchema: any;
}

export interface SelectionSetItem extends AstNode {
  isFragmentSpread: boolean;
  isInlineFragment: boolean;
  isField: boolean;
  isLeaf: boolean;
}

export interface SelectionSetInlineFragment extends SelectionSetItem {
  selectionSet: SelectionSetItem[];
  onType: string;
  fields: SelectionSetFieldNode[];
  fragmentsSpread: SelectionSetFragmentSpread[];
  inlineFragments: SelectionSetInlineFragment[],
  hasFragmentsSpread: boolean;
  hasInlineFragments: boolean;
  hasFields: boolean;
}

export interface SelectionSetFragmentSpread extends SelectionSetItem {
  fragmentName: string;
}

export interface SelectionSetFieldNode extends SelectionSetItem {
  selectionSet: SelectionSetItem[];
  name: string;
  type: string;
  isRequired: boolean;
  isArray: boolean;
  fields: SelectionSetFieldNode[];
  fragmentsSpread: SelectionSetFragmentSpread[];
  inlineFragments: SelectionSetInlineFragment[],
  hasFragmentsSpread: boolean;
  hasInlineFragments: boolean;
  hasFields: boolean;

  isType: boolean;
  isScalar: boolean;
  isInterface: boolean;
  isUnion: boolean;
  isInputType: boolean;
  isEnum: boolean;
}

export interface Fragment extends AstNode {
  name: string;
  selectionSet: SelectionSetItem[];
  onType: string;
  document: string;
  fields: SelectionSetFieldNode[];
  fragmentsSpread: SelectionSetFragmentSpread[];
  inlineFragments: SelectionSetInlineFragment[],
  hasFragmentsSpread: boolean;
  hasInlineFragments: boolean;
  hasFields: boolean;
}

export interface Operation extends AstNode {
  name: string;
  selectionSet: SelectionSetItem[];
  operationType: string;
  variables: Variable[];
  hasVariables: boolean;
  isQuery: boolean;
  isMutation: boolean;
  isSubscription: boolean;
  document: string;
  fields: SelectionSetFieldNode[];
  fragmentsSpread: SelectionSetFragmentSpread[];
  inlineFragments: SelectionSetInlineFragment[],
  hasFragmentsSpread: boolean;
  hasInlineFragments: boolean;
  hasFields: boolean;
}

export interface Variable {
  name: string;
  type: string;
  isRequired: boolean;
  isArray: boolean;
  isType: boolean;
  isScalar: boolean;
  isInterface: boolean;
  isUnion: boolean;
  isInputType: boolean;
  isEnum: boolean;
}

export interface Document {
  fragments: Fragment[];
  operations: Operation[];
  hasFragments: boolean;
  hasOperations: boolean;
}

export interface DirectiveUseMap {
  [name: string]: string;
}

export interface Directive {
  name: string;
  description: string;
  locations: string[];
  arguments: Argument[];
  hasArguments: boolean;

  onFragmentSpread: boolean;
  onInlineFragment: boolean;
  onQuery: boolean;
  onMutation: boolean;
  onSubscription: boolean;
  onFragment: boolean;
  onField: boolean;

  onSchema: boolean;
  onScalar: boolean;
  onFieldDefinition: boolean;
  onEnum: boolean;
  onEnumValue: boolean;
  onObject: boolean;
  onInputObject: boolean;
  onInputField: boolean;
  onArgument: boolean;
  onInterface: boolean;
  onUnion: boolean;
}

export interface FileOutput {
  filename: string;
  content: string;
}

export interface FlattenOperation extends Operation {
  innerModels: FlattenModel[];
  isFlatten: boolean;
}

export interface FlattenFragment extends Fragment {
  innerModels: FlattenModel[];
  isFlatten: boolean;
}

export interface FlattenDocument extends Document {
  operations: FlattenOperation[];
  fragments: FlattenFragment[];
  hasFragments: boolean;
  hasOperations: boolean;
}

export interface FlattenModel {
  schemaBaseType: string;
  modelType: string;
  fields: SelectionSetFieldNode[];
  fragmentsSpread: SelectionSetFragmentSpread[];
  inlineFragments: SelectionSetInlineFragment[];
  hasFragmentsSpread: boolean;
  hasFields: boolean;
  hasInlineFragments: boolean;
}

export interface Settings {
  generateSchema?: boolean;
  generateDocuments?: boolean;
  verbose?: boolean;
}
