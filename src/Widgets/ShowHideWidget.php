<?php

namespace Waldorfshop7\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\Settings\ValueListFactory;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\WidgetTypes;

class ShowHideWidget extends BaseWidget
{
    /**
     * @var string
     */
    protected $template = "Waldorfshop7::Widgets.Grid.ShowHideWidget";

    /**
     * @inheritDoc
     */
    public function getData(): array
    {
        return WidgetDataFactory::make("Waldorfshop7::ShowHideWidget")
            ->withLabel("Widget.showHideWidgetLabel")
            ->withPreviewImageUrl("/images/widgets/background.svg")
            ->withType(WidgetTypes::STRUCTURE)
            ->withCategory(WidgetCategories::STRUCTURE)
            ->withPosition(800)
            ->withSearchKeyWords([
                "anzeige", "bedingte", "zweite", "seite", "responsive"
            ])
            ->toArray();
    }

    /**
     * @inheritDoc
     */
    public function getSettings(): array
    {
        /** @var WidgetSettingsFactory $settings */
        $settings = pluginApp(WidgetSettingsFactory::class);

        $settings->createCustomClass();

        $settings->createCheckbox("hiddenOnSecondPage")
            ->withDefaultValue(false)
            ->withName("Widget.hiddenOnSecondPageLabel");

        $settings->createCheckboxGroup("responsiveVisibility")
            ->withName("Widget.responsiveVisibilityLabel")
            ->withDefaultValue([
                "xs",
                "sm",
                "md",
                "lg",
                "xl"
            ])
            ->withCheckboxValues(
                ValueListFactory::make()
                    ->addEntry("xs", "Widget.showXS")
                    ->addEntry("sm", "Widget.showSM")
                    ->addEntry("md", "Widget.showMD")
                    ->addEntry("lg", "Widget.showLG")
                    ->addEntry("xl", "Widget.showXL")
                    ->toArray()
            );

        $settings->createSpacing();

        return $settings->toArray();
    }
}
