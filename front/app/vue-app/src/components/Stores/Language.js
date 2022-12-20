import { defineStore } from "pinia";
import { setTransitionHooks } from "vue";

export const ln = defineStore("ln", {
  state: () => ({
    puzzle: "Puzzle",
    puzzleType: "Puzzle Type",
    view: "View",
    stage: "Stage",
    rotation: "Rotation",
    color: "Color",
    faceletDefinition: "Facelet Definition",
    faceletDefinitionNote:
      "Facelet Color options are depend on Scheme setting.",
    faceletColors: "Facelet Colors",
    faceletColorsNote:
      "  Facelet Definition takes precedence over Facelet Color if both are defined.",
    scheme: "Scheme",
    cubeColor: "Cube Color",
    backgroundColor: "Background Color",
    chooseFace: "Choose Face",
    algorithm: "Algorithm",
    algToApply: "Alg to Apply",
    algToSolve: "Alg To Solve",
    rotation: "Rotation",
    arrow: "Arrow",
    new: "New",
    arrowDefinition: "Arrow Definition",
    startpoint: "Startpoint",
    pass: "Pass",
    endpoint: "Endpoint",
    chooseStartpoint: "Change Startpoin",
    choosePass: "Change Pass",
    chooseEndpoint: "Change Endpoint",
    skipPass: "Skip Pass",
    s: "S",
    p: "P",
    e: "E",
    arrowOptions: "Arrow Options",
    scale: "Scale",
    influence: "Influence",
    currentArrowStatus: "Current Arrow Status",
    opacity: "Opacity",
    faceletOpacity: "Facelet Opacity",
    cubeOpacity: "Cube Opacity",
    image: "Image",
    projectionDistance: "Projection Distance",
    size: "Size",
    format: "Format",
    importFromSavedSettings: "Import From Saved Settings",
    saveSettings: "Save Settings",
    savedSettings: "Saved Settings",
    preview: "Image",
    editor: "Editor",
    name: "Name",
    warning: "Warning",
    warningText: "Are you sure to delete?",
    resetAllWarningText: "Are you sure you want to reset all settings?",
    generateImage: "Generate Image",
    colorOptions: "Color Options",
    selectedColor: "Selected Color",
    arrowModalNote: "Startpoint, Pass, and Endpoint have to be on same face.",
    arrowSetting: "Arrow Setting",
    arrowChooseFaceNote: "Choose the face that you want to add arrow on.",
    arrowStartpointNote: "Choose the facelet that the arrow starts from.",
    arrowPassNote: "Choose facelet that the arrow passes.",
    arrowEndpointNote: "Choose Facelet that the arrow ends.",
    arrowConfirmationNote: "Are you sure to add the arrow?",

    delete: "Delete",
    deleteAll: "Delete All",
    reset: "Reset",
    resetAll: "Reset All",
    face: "Face",
    close: "Close",
    add: "Add",
    save: "Save",
    import: "Import ",
    yes: "Yes",
    no: "No",
    facelet: "Facelet",
    others: "Others",
  }),
  actions: {
    changeLanguage(ln) {
      if (ln == "en") {
        this.puzzle = "Puzzle";
        this.puzzleType = "Puzzle Type";
        this.view = "View";
        this.stage = "Stage";
        this.rotation = "Rotation";
        this.color = "Color";
        this.faceletDefinition = "Facelet Definition";
        this.faceletDefinitionNote =
          "Facelet Color options are depends Scheme setting.";
        this.faceletColors = "Facelet Colors";
        this.faceletColorsNote =
          "Facelet Definition takes precedence over Facelet Color if both are defined.";
        this.scheme = "Scheme";
        this.cubeColor = "Cube Color";
        this.backgroundColor = "Background Color";
        this.chooseFace = "Choose Face";
        this.algorithm = "Algorithm";
        this.algToApply = "Alg to Apply";
        this.algToSolve = "Alg to Solve";
        this.rotation = "Rotation";
        this.arrow = "Arrow";
        this.new = "new";
        this.arrowDefinition = "Arrow Definition";
        this.startpoint = "Startpoint";
        this.pass = "Pass";
        this.endpoint = "Endpoint";
        this.chooseStartpoint = "Change Startpoint";
        this.choosePass = "Change Pass";
        this.chooseEndpoint = "Change Endpoint";
        this.skipPass = "Skip Pass";
        this.s = "S";
        this.p = "P";
        this.e = "E";
        this.arrowOptions = "Arrow Options";
        this.scale = "scale";
        this.influence = "Influence";
        this.currentArrowStatus = "Current Arrow Status";
        this.opacity = "Opacity";
        this.faceletOpacity = "Facelet Opacity";
        this.cubeOpacity = "Cube Opacity";
        this.image = "Image";
        this.projectionDistance = "Projection Distance";
        this.size = "Size";
        this.format = "Format";
        this.importFromSavedSettings = "Import From Saved Settings";
        this.saveSettings = "Save Settings";
        this.savedSettings = "Saved Settings";
        this.preview = "Image";
        this.editor = "Editor";
        this.name = "Name";
        this.warning = "Warning";
        this.warningText = "Are you sure to delete?";
        this.resetAllWarningText =
          "Are you sure you want to reset all settings?";
        this.generateImage = "Generate Image";
        this.colorOptions = "Color Options";
        this.selectedColor = "Selected Color";
        this.arrowModalNote =
          "Startpoint, Pass, and Endpoint have to be on same face.";
        this.arrowSetting = "Arrow Setting";
        this.arrowChooseFaceNote =
          "Choose the face that you want to add arrow on.";
        this.arrowStartpointNote =
          "Choose the facelet that the arrow starts from.";
        this.arrowPassNote = "Choose facelet that the arrow passes.";
        this.arrowEndpointNote = "Choose Facelet that the arrow ends.";
        this.arrowConfirmationNote = "Are you sure to add the arrow?";

        this.delete = "Delete";
        this.deleteAll = "Delete All";
        this.reset = "Reset";
        this.resetAll = "Reset All";
        this.face = "Face";
        this.close = "Close";
        this.add = "Add";
        this.save = "Save";
        this.import = "Import";
        this.yes = "Yes";
        this.no = "No";
        this.facelet = "Facelet";
        this.others = "Others";
      }
      if (ln == "jp") {
        this.puzzle = "キューブ";
        this.puzzleType = "タイプ";
        this.view = "視点";
        this.stage = "ステージ";
        this.rotation = "回転";
        this.color = "色";

        this.faceletDefinition = "ステッカー設定";
        this.faceletDefinitionNote = "色の選択肢は配色の設定に依存します。";
        this.faceletColors = "ステッカー詳細設定";
        this.faceletColorsNote =
          "ステッカー設定とステッカー色の両方が定義されているとき、ステッカー設定が優先して反映されます。";
        this.scheme = "配色設定";
        this.cubeColor = "キューブの色";
        this.backgroundColor = "背景色";
        this.chooseFace = "面を選択してください";
        this.algorithm = "手順";
        this.algToApply = "手順";
        this.algToSolve = "逆手順";
        this.rotation = "回転";
        this.arrow = "矢印";
        this.new = "新規追加";
        this.arrowDefinition = "矢印設定";
        this.startpoint = "スタートポイント";
        this.pass = "パス";
        this.endpoint = "エンドポイント";
        this.chooseStartpoint = "スタートポイントの変更";
        this.choosePass = "パスの変更";
        this.chooseEndpoint = "エンドポイントの変更";
        this.skipPass = "パスをスキップ";
        this.s = "S";
        this.p = "P";
        this.e = "E";
        this.arrowOptions = "オプション";
        this.scale = "サイズ";
        this.influence = "曲がり具合";
        this.currentArrowStatus = "ステータス";
        this.opacity = "透明度";
        this.faceletOpacity = "ステッカーの透明度";
        this.cubeOpacity = "キューブの透明度";
        this.projectionDistance = "描画距離";
        this.size = "サイズ";
        this.format = "ファイル形式";
        this.importFromSavedSettings = "設定をインポート";
        this.saveSettings = "設定を保存";
        this.savedSettings = "保存した設定";
        this.preview = "画像";
        this.editor = "設定";
        this.name = "名前";
        this.warning = "注意";
        this.warningText = "設定を削除しますか？";
        this.resetAllWarningText = "すべての設定をリセットしますか？";
        this.generateImage = "画像を生成";
        this.colorOptions = "色選択";
        this.selectedColor = "選択中の色";
        this.arrowModalNote =
          "スタートポイント、パス、エンドポイントは同じ面で選択してください。";
        this.arrowSetting = "矢印設定";
        this.arrowChooseFaceNote = "矢印を追加する面を選択してください。";
        this.arrowStartpointNote = "始点を選択してください。";
        this.arrowPassNote = "通過点を選択してください。";
        this.arrowEndpointNote = "終点を選択してください。";
        this.arrowConfirmationNote = "この矢印を追加しますか？";

        this.delete = "削除";
        this.deleteAll = "全削除";
        this.reset = "リセット";
        this.resetAll = "すべてリセット";
        this.face = "面";
        this.close = "閉じる";
        this.add = "追加";
        this.image = "画像";
        this.save = "保存";
        this.import = "インポート";
        this.yes = "はい";
        this.no = "いいえ";
        this.facelet = "ステッカー";
        this.others = "その他";
      }
    },
    consoleHOGE() {
      console.log("hoge");
    },
  },
});
