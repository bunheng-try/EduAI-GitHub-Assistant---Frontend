import { useState } from "react";
import type { Challenge } from "../types/challenge";
import { useChallengeStore } from "../stores/challengeStore";

import MenuTabs, { type TabItem } from "@/shared/components/menu_tabs/MenuTabs";
import ChallengeSettingTab from "../components/SettingTab";
import ChallengeStartCodeTab from "../components/StartCodeTab";
import DescriptionTab from "../components/DescriptionTab";
import ChallengeTestCaseTab from "../components/TestCaseTab";



interface Props {
    challenge?: Challenge;
    onClose: () => void;
}

export type ChallengeTab =
    | "description"
    | "startCode"
    | "testCase"
    | "setting";

export const ChallengeForm = ({ challenge, onClose }: Props) => {
    const isEdit = !!challenge;

    const { createChallenge, updateChallenge } = useChallengeStore();

    /* ---------------- TAB STATE ---------------- */
    const [activeTab, setActiveTab] =
        useState<ChallengeTab>("description");

    /* ---------------- FORM STATE ---------------- */
    const [title, setTitle] = useState(challenge?.title ?? "");
    const [description, setDescription] =
        useState(challenge?.description ?? "");

    const [language, setLanguage] =
        useState(challenge?.language ?? "");

    const [difficulty, setDifficulty] =
        useState(challenge?.difficulty ?? "");

    const [category, setCategory] =
        useState(challenge?.category ?? "");

    const [points, setPoints] =
        useState(challenge?.points ?? 0);

    const [starterCode, setStarterCode] =
        useState(challenge?.starterCode ?? "");

    const [aiEvaluation, setAiEvaluation] =
        useState(false);

    /* ---------------- ERRORS ---------------- */
    const [errors, setErrors] = useState<any>({});

    /* ---------------- TAB CONFIG ---------------- */
    const tabs: TabItem<ChallengeTab>[] = [
        { key: "description", label: "Description" },
        { key: "startCode", label: "Start Code" },
        { key: "testCase", label: "Test Case" },
        { key: "setting", label: "Setting" },
    ];

    /* ---------------- VALIDATION ---------------- */
    const validate = () => {
        const newErrors: any = {};

        if (!title) newErrors.title = "Title is required";
        if (!description)
            newErrors.description = "Description is required";
        if (!language)
            newErrors.language = "Language is required";
        if (!difficulty)
            newErrors.difficulty = "Difficulty is required";
        if (!category)
            newErrors.category = "Category is required";
        if (!points)
            newErrors.points = "Points is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    /* ---------------- SUBMIT ---------------- */
    const handleSubmit = () => {
        if (!validate()) return;

        const data: Challenge = {
            id: challenge?.id ?? crypto.randomUUID(),
            title,
            description,
            language,
            difficulty: difficulty as any,
            category,
            points,
            starterCode,
        };

        if (isEdit) updateChallenge(data);
        else createChallenge(data);

        onClose();
    };

    /* ---------------- UI ---------------- */
    return (
        <div className="flex-1 bg-white rounded-xl shadow">

            {/* ✅ HEADER */}
            <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="font-semibold text-lg">
                    {isEdit ? "Edit Challenge" : "Create Challenge"}
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded-md text-sm"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm"
                    >
                        {isEdit ? "Save" : "Create"}
                    </button>
                </div>
            </div>

            {/* ✅ TABS */}
            <div className="px-6">
                <MenuTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
            </div>

            {/* ✅ TAB CONTENT */}
            <div className="p-6">

                {/* -------- DESCRIPTION TAB -------- */}
                {activeTab === "description" && (
                    <DescriptionTab
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        language={language}
                        setLanguage={setLanguage}
                        errors={errors}
                    />
                )}

                {/* -------- START CODE TAB -------- */}
                {activeTab === "startCode" && (
                    <ChallengeStartCodeTab
                        starterCode={starterCode}
                        setStarterCode={setStarterCode}
                    />
                )}

                {/* -------- TEST CASE TAB -------- */}
                {activeTab === "testCase" && (
                    <ChallengeTestCaseTab />
                )}

                {/* -------- SETTING TAB -------- */}
                {activeTab === "setting" && (
                    <ChallengeSettingTab
                        points={points}
                        setPoints={setPoints}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        category={category}
                        setCategory={setCategory}
                        aiEvaluation={aiEvaluation}
                        setAiEvaluation={setAiEvaluation}
                        errors={errors}
                    />
                )}
            </div>
        </div>
    );
};
